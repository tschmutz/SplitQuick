import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})
export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveSessionErrors(err.responseJSON)))
)
export const login = (user) => dispatch => {
  console.log(user);
  console.log(APIUtil.login(user));
  APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
}
export const logout = (user) => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
)
