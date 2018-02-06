import React from 'react';



class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateInfo(info) {
    return event => this.setState({
      [info]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.state);
  }

  componentWillUnmount() {
    this.props.resetErrors('');
  }

//   renderErrors() {
//   return(
//     <ul>
//         <li key='session-error'>
//           {this.props.errors}
//   );
// }

  render () {



    return (
        <div className='signup-form'>
          <form onSubmit= { this.handleSubmit}>Welcome to SplitQuick
            <div className='signup-errors'>{this.props.errors}</div>
            <br/>
            <label>
              <br/>
            <input type="text"
                   value={this.state.username}
                   onChange={this.updateInfo('username')}
                   className="signup-input"
                   placeholder='Username'
                    />
            </label>
            <br/>
            <label>
            <br/>
            <input type="password"
                   value={this.state.password}
                   onChange={this.updateInfo('password')}
                   className="signup-input"
                   placeholder='Password'
                    />
            </label>
            <br/>
            <input className='signup-button' type='submit' value="Sign Me Up!"/>
          </form>

        </div>
    )
  }
}


export default SignUpForm;
