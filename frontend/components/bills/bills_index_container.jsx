import { connect } from 'react-redux';
import BillsIndex from './bills_index.jsx';
import { fetchAllBills, createBill, deleteBill } from '../../actions/bills_actions';
import { fetchUsers} from '../../actions/user_actions';
import { fetchFriends } from '../../actions/friend_actions';

const mapStateToProps = state => {
  const billsArray = Object.keys(state.bills)
  const id = state.session.currentUser.id
  const amountLent = billsArray.reduce((total, billId) => {
        const bill = state.bills[billId]
        const amount = parseFloat(bill.amount)
        const lender = bill.lender
        if(id === lender && !bill.settled) {
          return amount + total
        }else {
          return total
        }
  }, 0).toFixed(2)
  const amountBorrowed = billsArray.reduce((total, billId) => {
    const bill = state.bills[billId]
    const amount = parseFloat(bill.amount)
    const lendee = bill.lendee
    if(id === lendee && !bill.settled) {
      return amount + total
    }else {
      return total
    }
  }, 0).toFixed(2)

  const totalAmount = (amountLent - amountBorrowed).toFixed(2)
  return {
    totalAmount,
    bills: Object.values(state.bills).reverse(),
    friends: state.friends,
    currentUser: state.session.currentUser,
    loading: false

}};


const mapDispatchToProps = dispatch => ({
  addBill: bill => dispatch(createBill(bill)),
  requestBills: () => dispatch(fetchAllBills()),
  destroyBill: (billId) => dispatch(deleteBill(billId)),
  requestUsers: () => dispatch(fetchUsers()),
  requestFriends: () => dispatch(fetchFriends())
});



export default connect(mapStateToProps, mapDispatchToProps)(BillsIndex);
