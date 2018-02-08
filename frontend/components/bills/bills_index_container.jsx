import { connect } from 'react-redux';
import BillsIndex from './bills_index.jsx';
import { fetchAllBills } from '../../actions/bills_actions'


const mapStateToProps = state => ({
  bills: Object.values(state.bills),
  friends: state.friends,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});



export default connect(mapStateToProps, mapDispatchToProps)(BillsIndex);
