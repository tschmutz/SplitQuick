import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import { toggleSettle } from '../../actions/bills_actions'


class SettleModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: this.props.isOpen,
      friend: this.props.friends[0],
      billId: null
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
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

    handleSelect() {

      return event => {
        this.setState({
          billId: event.target.value,
        })
      }
    }

    handleAdd() {
      event.preventDefault();
      console.log(this.props, this.state.billId)
      this.props.settleBill(this.state.billId)

    }

    render () {
      const { friends } = this.props;
      const friendBills = this.props.bills.filter(bill => {
        return bill.lender === parseInt(this.state.friend)
              || bill.lendee === parseInt(this.state.friend)
      })


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
                 <option key={friend[0]} value={friend[0]}>{friend[1]}</option>
              ))}
            </select>
          </div>
          <br/>
            <div className='setle-modal-bills'>
              <ul className='settle-modal-list'>
                {friendBills.map(bill => {
                  const billColor = bill.id === this.state.billId ? '#ff652f':'#5bc5a7'
                  return !bill.settled && <li key={bill.id}
                             style={{'listStyle': 'none',
                                      color: billColor,
                                      cursor:'pointer'}}
                             value={bill.id}
                             name='bill'
                             onClick={this.handleSelect()}
                             >

                            <br/>
                            {Number(bill.amount).toFixed(2)} for {bill.title}
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

const mapDispatchToProps = dispatch => ({
  settleBill: (billId) => dispatch(toggleSettle(billId))
})
export default connect(mapStateToProps, mapDispatchToProps)(SettleModal)
