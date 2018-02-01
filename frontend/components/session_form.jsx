import React from 'react';



class SessionForm extends React.Component {
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
    this.props.login(this.state)
  }

  render () {



    return (
      <div className='session-form'>
        <form onSubmit= { this.handleSubmit}>
          <label>
          <input type="text"
                 value={this.state.username}
                 onChange={this.updateInfo('username')}
                 className="login-input"
                  />
          </label>
          <br/>
          <label>
          <input type="text"
                 value={this.state.password}
                 onChange={this.updateInfo('password')}
                 className="login-input"
                  />
          </label>
          <br/>
          <input className='submit-button' type='submit' value="Log in"/>
        </form>
      </div>
    )
  }
}


export default SessionForm;
