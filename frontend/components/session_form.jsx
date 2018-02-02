import React from 'react';



class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  updateInfo(info) {
    return event => this.setState({
      [info]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  handleGuest() {
    this.props.login({username: 'Guest', password: '123456'});
  }

  renderErrors() {
  return(
    <ul>
        <li key='session-error'>
          {this.props.errors[0]}
        </li>
    </ul>
  );
}

  render () {



    return (
        <div className='session-form'>
          <form >
            <label>
            <input type="text"
                   value={this.state.username}
                   onChange={this.updateInfo('username')}
                   className="login-input"
                    />
            </label>
            <br/>
            <label>
            <input type="password"
                   value={this.state.password}
                   onChange={this.updateInfo('password')}
                   className="login-input"
                    />
            </label>
            <br/>
            <input onClick={ this.handleSubmit} className='submit-button' type='submit' value="Log in to SplitQuick"/>
            <input onClick={ this.handleGuest} className='demo-button' type='submit' value="Demo log in"/>
            <div className='session-error'>{this.props.errors}</div>
          </form>

        </div>
    )
  }
}


export default SessionForm;
