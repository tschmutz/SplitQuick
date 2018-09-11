import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'


class AddModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: this.props.isOpen,
      description: '',
      friend: this.props.friends[0][1],
      amount: '',
      payer: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.organizeArguments = this.organizeArguments.bind(this)
  }

  readyToAdd() {
    return Object.values(this.state).every(entry => {
      return entry !== ''
    })
  }

  componentDidlMount() {

    Modal.setAppElement=('#root')
  }

    handleInput(type) {
      return event =>
      this.setState({
        [type]: event.target.value
      })
    }

    organizeArguments() {
      const friend = this.props.friends.filter(friend => friend[1] === this.state.friend)[0]
      const lenderId = this.state.payer == 'user' ? this.props.currentUser.id : friend[0]
      const lendeeId = lenderId == this.props.currentUser.id ? friend[0] : this.props.currentUser.id
      return {
        amount: this.state.amount,
        title: this.state.description,
        lender_id: lenderId,
        lendee_id: lendeeId,
        settled: false
      }
    }

    clearState() {
      return
      this.setState({
        modalIsOpen: false,
        description: '',
        friend: '',
        amount: '',
        payer: ''
      })
    }

    handleAdd() {
      event.preventDefault();
      console.log(this.props)
      console.log(this.organizeArguments())
      this.props.addBill(this.organizeArguments())
    }

    render () {
      const { friends } = this.props;
      console.log(this.readyToAdd());
      return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.props.closeAddModal}
        style={{overlay: {backgroundColor: 'rgba(220, 220, 220, .8)'}}}
        className='add-bill-modal'>

        <header className='modal-header'>
          <h3 className='modal-h3'>Add a bill</h3>
          <b className='modal-exit'onClick={this.props.closeModal}><i className="fas fa-times"></i></b>
        </header>
        <form onSubmit={this.handleAdd} className='add-bill-form'>
          <div className='modal-name-input'>With you and: &nbsp;&nbsp;
            <select className='add-names-modal'
              onChange={this.handleInput('friend')}
              placeholder='Enter name'
              defaultValue={friends[0]}>
              {friends.map(friend => (
                 <option>{friend[1]}</option>
              ))}
            </select>
          </div>
          <br/>
            <div className='modal-desc'>
              <input className='description'
                value={this.state.description}
                onChange={this.handleInput('description')}
                placeholder='Enter Description'>
              </input>
              <br/>
              <div className='modal-amount-container'>
                <input className='modal-amount'
                  type='number'
                  step='.01'
                  value={this.state.amount}
                  onChange={this.handleInput('amount')}
                  placeholder='$0.00'>
                </input>
              </div>

            <div className="wrapper-dropdown">
                <select  onChange={this.handleInput('payer')} className='select-dropdown' value={this.state.payer}>
                  <option value="" selected disabled hidden>Paid by</option>
                  <option value="user">You</option>
                  <option value='friend'>{this.state.friend}</option>
                </select>
            </div>

            <button disabled={!this.readyToAdd()} className='modal-add-bill' type='submit'>Add Bill</button>
          </div>

        </form>

        </Modal>
      )
    }
}

function mapStateToProps(state) {
  const friendsId = Object.keys(state.friends)
  const friends = friendsId.map(id => [id, state.friends[id].username])
  return {
    friends,
    currentUser: state.session.currentUser
  }
}
export default connect(mapStateToProps)(AddModal)
