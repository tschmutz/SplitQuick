import merge from 'lodash/merge';

import { RECEIVE_ALL_BILLS, RECEIVE_BILL, DELETE_BILL, SETTLE_BILL } from '../actions/bills_actions';


const billsReducer = ( state = {}, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_BILLS:
      return action.bills
    case RECEIVE_BILL:
      let newState = merge({}, state);
      return merge(newState, action.bill)
    case DELETE_BILL:
      let novoState = merge({}, state);
      delete novoState[action.billId];
      return novoState;
    case SETTLE_BILL:
      let settledState = merge({}, state)
      newState[action.billId].settled = true
      return newState
    default:
    return state;
  }
}


export default billsReducer;
