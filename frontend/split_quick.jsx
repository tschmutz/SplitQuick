import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { login } from './actions/session_actions';
import { fetchAllBills } from './util/bills_api_util';
import { deleteFriendship } from './util/friends_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const user = {username: 'taylor', password: '123456'}

  // window.login = login

  let preloadedState = undefined;
  if(window.currentUser) {
    preloadedState = {
      session:  {
        currentUser: window.currentUser
      }
    }
    delete window.currentUser;
  };
  const store = configureStore(preloadedState)

  window.dispatch = store.dispatch
  window.getState = store.getState
  ReactDOM.render(<Root store={store}/>, root)
})
