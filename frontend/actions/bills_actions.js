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



export const fetchAllBills = function(){
  return function dispatcher(dispatch) {
    // set loading to true for your expenses state
    // setTimeout 3000
    // do this call
    APIUtil.fetchAllBills().then( bills => dispatch(receiveAllBills(bills)))
    // after it's done set loading to false
    // response w/ bills
    // maybe do error state.
  }
}
export const createBill = (bill) => (dispatch) => (
  APIUtil.createBill(bill).then( bill => dispatch(receiveBill(bill)))
)

export const deleteBill = (billId) => dispatch => (
  APIUtil.deleteBill(billId).then(bill => dispatch(destroyBill(billId)))
)
