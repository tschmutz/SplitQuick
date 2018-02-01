import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'
import Root from './components/root'
import { login } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore()
  const user = {username: 'taylor', password: '123456'}
  window.user = user
  window.login = login

  window.dispatch = store.dispatch
  window.getState = store.getState
  ReactDOM.render(<Root store={store}/>, root)
})
