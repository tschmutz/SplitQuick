import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SideBar from './side_bar';


const mapStateToProps = state => ({
  errors: state.errors.session
})


const mapDispatchToProps = dispatch => ({


})



export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
