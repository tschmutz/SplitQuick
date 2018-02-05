import React from 'react';



class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInfo(info) {
    return event => this.setState({
      [info]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
      if(event.target.value === 'Guest') {
        this.props.login({username: 'Guest', password: '123456'});
      } else {
      this.props.login(this.state);
    }
  }


  // renderErrors() {
  // return(
  //       <ul>
  //           <li key='session-error'>
  //             {this.props.errors[0]}
  //           </li>
  //       </ul>
  //       );
  //     }

  componentWillUnmount() {
    this.props.resetErrors('');
  }


  render () {

    return (
        <div className='session-form'>
          <form onSubmit={this.handleSubmit}>
            <label>
            <input type="text"
                   value={this.state.username}
                   onChange={this.updateInfo('username')}
                   className="login-input"
                   placeholder='Username'
                    />
            </label>
            <br/>
            <label>
            <input type="password"
                   value={this.state.password}
                   onChange={this.updateInfo('password')}
                   className="login-input"
                   placeholder="Password"
                    />
            </label>
            <br/>
            <input className='submit-button' type='submit' value="Log in to SplitQuick"/>
            <button onClick={ this.handleSubmit} className='demo-button' value="Guest">Demo log in</button>
            <div className='session-error'>{this.props.errors}</div>
          </form>

        </div>
    )
  }
}


export default SessionForm;
