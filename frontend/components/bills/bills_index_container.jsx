import { connect } from 'react-redux';
import BillsIndex from './bills_index.jsx';
import { fetchAllBills } from '../../actions/bills_actions'


const mapStateToProps = state => ({
  bills: Object.values(state.bills)
});

const mapDispatchToProps = dispatch => ({
});



export default connect(mapStateToProps, mapDispatchToProps)(BillsIndex);
