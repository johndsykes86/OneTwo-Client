import axios from 'axios'
import jwtDecode from 'jwt-decode'

//
class AuthClient {
  constructor() {
    this.request = axios.create({
      baseURL: 'https://onetwo-server.herokuapp.com/api/',
      headers: {
        common: {
          token: this.getToken()
        }
      }
    })
  }

  getStadiums(){
    return this.request({url: '/stadiums'})
    .then((response) => {
      return response.data
    })
  }

  getStadium(id){
    return this.request({url: `/stadiums/${id}`})
    .then((response) => {
      return response.data
    })
  }

  signUp(userInfo) {
    return this.request({method: 'POST', url: '/signup', data: userInfo})
      .then((response) => response.data)
  }

  logIn(credentials) {
    return this.request({method: 'POST', url: '/login', data: credentials})
      .then(response => {
        console.log(response.data.success)
        if(response.data.success) {
          const token = response.data.token
          this.setToken(token)
          return jwtDecode(token)
        } else {
          return false
        }
      })
  }

  getCurrentUser() {
    const token = this.getToken()
    return token ? jwtDecode(token) : null
  }

  getUser(id){
    return this.request({url: `/users/${id}`})
      .then((response)=>{
        console.log(response)
        return response.data})
  }

  postCheckin(data){
    return this.request({method: "POST", url:`/stadiums/${data._stadiumID}/checkin`, data:data}).then(response=>response.data)
  }

  getCheckin(id){
    return this.request({ url:`/stadiums/${id}/checkin` }).then(response=>response.data)
  }

  getToken() {
    // retrieve token from local storage:
    return localStorage.getItem('token')
  }

  setToken(token) {
    // save token to localStorage:
    localStorage.setItem('token', token)
    // tell axios to always include this token in headers:
    this.request.defaults.headers.common.token = token
    return token
  }

  clearToken() {
    // remove token from localStorage:
    localStorage.removeItem('token')

    // tell axios to stop sending with token:
    delete this.request.defaults.headers.common.token

  }
}

export default new AuthClient()
