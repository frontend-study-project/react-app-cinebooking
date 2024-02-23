import { JoinForm } from "../types";
import { LoginForm } from "../types";

export const loginApi = (form: LoginForm) => {
  return fetch('api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((response) => {
      if(!response.ok) throw new Error();
      return response.json();
    })
}

export const joinApi = (form: JoinForm) => {
  return fetch('api/auth/join', {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(form)
  })
    .then((response) => {
      if(!response.ok) throw new Error();
      return response.json();
    })
}