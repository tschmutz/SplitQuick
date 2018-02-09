import merge from 'lodash/merge';

import { RECEIVE_ALL_BILLS, RECEIVE_BILL } from '../actions/bills_actions';


const billsReducer = ( state = {}, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_BILLS:
      return action.bills
    case RECEIVE_BILL:
      let newState = merge({}, state);
      return merge(newState, action.bill)
    default:
    return state;
  }
}


export default billsReducer;
