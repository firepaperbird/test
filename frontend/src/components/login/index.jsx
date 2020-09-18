import React from "react";
import { Container, Row, Col,Form, Button} from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Store from '../../util/store'


@connect(({ user }) => ({ user }))
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (e) =>{        
    e.preventDefault();
    const logUser = { username:e.target.username.value, password:e.target.password.value };
    const action = { type : 'USERS_LOGIN_REQUEST', payload: logUser };
    Store.dispatch(action)
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="show-grid">
            <Col md={2}></Col>
            <Col md={8}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>username:</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


// function mapStateToProps(state) {
//     return { todos: state.todos };
//   }
  
// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actionCreators, dispatch) };
// }

export default Login;