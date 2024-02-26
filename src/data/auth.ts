import { JoinForm } from "../types";
import { User } from "../types";
import { LoginForm } from "../types";
import { getAuthorization } from "./index";
type LoginResponse = {
  token: string
  user: User
}
export const loginApi = (form: LoginForm) : Promise<LoginResponse> => {
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

export const authApi = () : Promise<User> => {
  return fetch('/api/auth/user', {
    method: 'GET',
    headers: {
      Authorization : `Bearer ${getAuthorization()}`
    }
  })
    .then((response) => {
      if(!response.ok) throw new Error();
      return response.json();
    })
}