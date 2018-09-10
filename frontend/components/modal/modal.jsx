import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'


class AddModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: this.props.isOpen,
      description: '',
      friend: this.props.friends[0],
      amount: '',
      payer: ''
    }
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
      this.closeModal;
      const friend = Object.values(this.props.friends).filter(friend => friend.username === this.state.friend)
      const lenderId = this.state.payer == 'user' ? this.props.currentUser.id : friend[0].id
      const lendeeId = lenderId == this.props.currentUser.id ? friend[0].id : this.props.currentUser.id
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

    handleSubmit() {
      event.preventDefault();
      return (event) => this.props.createBill(this.organizeArguments())
    }

    render () {
      const { friends } = this.props;
      return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        style={{overlay: {backgroundColor: 'rgba(220, 220, 220, .8)'}}}
        className='add-bill-modal'>

        <header className='modal-header'>
          <h3 className='modal-h3'>Add a bill</h3>
          <b className='modal-exit'onClick={this.props.closeModal}><i className="fas fa-times"></i></b>
        </header>
        <form onSubmit={this.handleSubmit()} className='add-bill-form'>
          <div className='modal-name-input'>With you and: &nbsp;&nbsp;
            <select className='add-names-modal'
              onChange={this.handleInput('friend')}
              placeholder='Enter name'
              defaultValue={friends[0]}>
              {friends.map(friend => (
                 <option>{friend}</option>
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

            <button className='modal-add-bill' type='submit'>Add Bill</button>
          </div>

        </form>

        </Modal>
      )
    }
}

function mapStateToProps(state) {
  const friendsId = Object.keys(state.friends)
  const friends = friendsId.map(id => state.friends[id].username)
  return {
    friends
  }
}
export default connect(mapStateToProps)(AddModal)
