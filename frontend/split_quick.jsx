import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './util/session_api_util'
import configureStore from './store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore()
  ReactDOM.render(<h1>SplitQuick</h1>, root)
})
