import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchFriends} from '../../actions/friend_actions';
import { fetchAllBills, createBill } from '../../actions/bills_actions';
import { fetchUsers } from '../../actions/user_actions';


function mapStateToProps({session, bills, users, friends}){
  const friendObj = {}
  const billsArray = Object.keys(bills)
  const id = session.currentUser.id
  const amountLent = Object.keys(bills).reduce((total, billId) => {
        const bill = bills[billId]
        const amount = parseFloat(bill.amount)
        const lender = bill.lender
        if(id === lender && !bill.settled) {
          return amount + total
        }else {
          return total
        }
  }, 0).toFixed(2)
  const amountBorrowed = billsArray.reduce((total, billId) => {
    const bill = bills[billId]
    const amount = parseFloat(bill.amount)
    const lendee = bill.lendee
    if(id === lendee && !bill.settled) {
      return amount + total
    }else {
      return total
    }
  }, 0).toFixed(2)

  const totalAmount = (amountLent - amountBorrowed).toFixed(2)
  const friendsArray = Object.keys(friends).map(id => {
    return friends[id].username
  })

  const friendsOwesArray = Object.keys(friends).map((friend) => {
      const friendOwes = billsArray.reduce((acc, next) => {
          if(bills[next].lendee === parseInt(friend) && !bills[next].settled) {
            return acc += parseFloat(bills[next].amount)
          }else{
            return acc
          }
        },0).toFixed(2)

      const friendOwed = billsArray.reduce((acc, next) => {
          if(bills[next].lender === parseInt(friend) && !bills[next].settled) {

            return acc += parseFloat(bills[next].amount)
          }else{
            return acc
          }
      }, 0).toFixed(2)

      return [friend, (friendOwes - friendOwed).toFixed(2)]
  })


  return {
    totalAmount,
    amountBorrowed,
    amountLent,
    friendsArray,
    friendsOwesArray,
    friends

  };
};

const mapDispatchToProps = dispatch => ({
  newBill: bill => dispatch(createBill(bill)),
  requestFriends: () => dispatch(fetchFriends()),
  requestBills: () => dispatch(fetchAllBills()),
  requestUsers: () => dispatch(fetchUsers()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
