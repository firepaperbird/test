import axios from "axios";

export async function loginService(username, password) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  return axios.post('http://localhost:4000/api/auth', body, config)
    .then((result) => {   
      return result.data      
    }).catch(() => {
      console.log("login fail")
      return null;
    })
}
