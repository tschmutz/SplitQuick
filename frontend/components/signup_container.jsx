import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SignUpForm from './signup_form';


const mapStateToProps = state => ({

})


const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
