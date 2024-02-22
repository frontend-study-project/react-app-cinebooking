export const loginApi = () => {
  fetch('/auth/cine/login', {
    method: 'POST',
    body: JSON.stringify({
      email: this.state.user.id,
      password: this.state.user.password
    })
  })
    .then((response) => response.json())
    .then((result) =>
      console.log("결과:", result)
    )
}

export const joinApi = () => {
  fetch('/auth/cine/join', {
    method: 'POST',
    body: JSON.stringify({
      email: this.state.user.email,
      password: this.state.user.password,
      passwordCheck: this.state.user.passwordCheck
    })
  })
    .then((response) => response.json())
    .then((result) =>
      console.log("결과:", result)
    )
}
