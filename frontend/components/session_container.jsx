import { connect } from 'react-redux';
import { login, signup, receiveSessionErrors } from '../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => ({
  errors: state.errors.session
})


const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  resetErrors: (err) => dispatch(receiveSessionErrors(err))
})



export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
