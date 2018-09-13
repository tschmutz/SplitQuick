import { connect } from 'react-redux';
import Activity from './activity_index.jsx';



const mapStateToProps = state => ({
  bills: Object.values(state.bills).reverse(),
  currentUser: state.session.currentUser,
  friends: state.friends
});

const mapDispatchToProps = dispatch => ({

});



export default connect(mapStateToProps, mapDispatchToProps)(Activity);
