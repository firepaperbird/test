import { all, takeEvery, put, call } from 'redux-saga/effects';
import {userConstants} from '../reducers/userReducer'
import {loginService} from '../service/loginService'
// function* fetchDataSaga() {
//     yield put(USER_INTERACTED_WITH_UI, data);
// }

export function* LOGIN({ payload }) {
    const { username, password } = payload
    yield put({
        type: 'user/SET_STATE',
        payload: {
            token: localStorage.getItem('token'),
            loading: true,
        },
    })
    alert()
    const success = yield call(loginService,username, password)
    if (success) {
        localStorage.setItem('token', success.token);
        console.log(success.token);
        // notification.success({
        //     message: 'Logged In',
        //     description: 'You have successfully logged in to Shopify Analytics!',
        // })
        yield put(userConstants.LOGIN_SUCCESS,{data:success})
    }else{
        yield put(userConstants.LOGIN_FAILURE)
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(userConstants.LOGIN_REQUEST, LOGIN),
        // takeEvery(actions.REGISTER, REGISTER),
        // takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
        // takeEvery(actions.LOAD_DASHBOARD, LOAD_DASHBOARD),
        // takeEvery(actions.LOGOUT, LOGOUT),
        // takeEvery(actions.PROFILE, PROFILE),
        // LOAD_CURRENT_ACCOUNT(),
    ])
}
