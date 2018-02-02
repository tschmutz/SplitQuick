import { connect } from 'react-redux';
import { signup, receiveSessionErrors } from '../actions/session_actions';
import SignUpForm from './signup_form';


const mapStateToProps = state => ({
  errors: state.errors.session
})


const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  resetErrors: (err) => dispatch(receiveSessionErrors(err))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
