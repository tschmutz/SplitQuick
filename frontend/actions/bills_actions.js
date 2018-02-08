import * as APIUtil from '../util/bills_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';


const receiveAllBills = bills => ({
  type: RECEIVE_ALL_BILLS,
  bills
})


export const fetchAllBills = () => (dispatch) => (
  APIUtil.fetchAllBills().then( bills => dispatch(receiveAllBills(bills)))
)
