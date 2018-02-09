import * as APIUtil from '../util/bills_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';

const receiveAllBills = bills => ({
  type: RECEIVE_ALL_BILLS,
  bills
})
const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
})




export const fetchAllBills = () => (dispatch) => (
  APIUtil.fetchAllBills().then( bills => dispatch(receiveAllBills(bills)))
)
export const createBill = (bill) => (dispatch) => (
  APIUtil.createBill(bill).then( bill => dispatch(receiveBill(bill)))
)
