import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'


class SettleModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: this.props.isOpen,
      friend: this.props.friends[0],

    }
    this.handleAdd = this.handleAdd.bind(this)
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


    clearState() {
      return
      this.setState({
        modalIsOpen: false,
        friend: '',
      })
    }

    handleAdd() {
      event.preventDefault();

    }

    render () {
      const { friends } = this.props;
      const friendBills = this.props.bills.filter(bill => {
        console.log(parseInt(this.state.friend));
        return bill.lender === parseInt(this.state.friend)
              || bill.lendee === parseInt(this.state.friend)
      })
      console.log(friendBills);
      return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.props.closeModal}
        style={{overlay: {backgroundColor: 'rgba(220, 220, 220, .8)'}}}
        className='add-bill-modal'>

        <header className='modal-header'>
          <h3 className='modal-h3'>Settle a bill</h3>
          <b className='modal-exit'onClick={this.props.closeModal}><i className="fas fa-times"></i></b>
        </header>
        <form onSubmit={this.handleAdd} className='add-bill-form'>
          <div className='modal-name-input'>With you and: &nbsp;&nbsp;
            <select className='add-names-modal'
              onChange={this.handleInput('friend')}
              placeholder='Enter name'>
              {friends.map(friend => (
                 <option value={friend[0]}>{friend[1]}</option>
              ))}
            </select>
          </div>
          <br/>
            <div className='setle-modal-bills'>
              <ul>
                {friendBills.map(bill => {
                  return <li key={bill.id} style={{'list-style': 'none'}}>
                            which bill?
                            <br/>
                            {bill.amount}
                        </li>
                })}
              </ul>

            <button className='modal-add-bill' type='submit'>Settle</button>
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
    bills: Object.values(state.bills),
    friends,
    currentUser: state.session.currentUser
  }
}
export default connect(mapStateToProps)(SettleModal)
