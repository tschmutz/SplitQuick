import * as APIUtil from '../util/bills_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const DELETE_BILL = 'DELETE_BILL';

const receiveAllBills = bills => ({
  type: RECEIVE_ALL_BILLS,
  bills
})
const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
})

const destroyBill = billId => ({
  type: DELETE_BILL,
  billId
})



export const fetchAllBills = () => (dispatch) => (
  APIUtil.fetchAllBills().then( bills => dispatch(receiveAllBills(bills)))
)
export const createBill = (bill) => (dispatch) => (
  APIUtil.createBill(bill).then( bill => dispatch(receiveBill(bill)))
)

export const deleteBill = (billId) => dispatch => (
  APIUtil.deleteBill(billId).then(bill => dispatch(destroyBill(billId)))
)
