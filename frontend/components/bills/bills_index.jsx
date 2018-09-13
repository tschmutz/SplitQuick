import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import BillItem from './bill_index_item';
import Modal from 'react-modal';

class BillsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      description: '',
      friend: '',
      amount: '',
      payer: ''
    }

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.clearState = this.clearState.bind(this);
  };

  componentDidMount() {
    this.props.requestBills()
    this.props.requestUsers();
    this.props.requestFriends();
  }




  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
    return () => this.setState({
      modalIsOpen: false,
      description: '',
      friend: '',
      amount: '',
      payer: ''
    })
  }

  handleSubmit() {
    event.preventDefault();
    this.clearState()
    return (event) => this.props.addBill(this.organizeArguments())
  }

  modal () {
    const friends = Object.values(this.props.friends);

    return (
    <Modal
      isOpen={this.state.modalIsOpen}
      onRequestClose={this.closeModal}
      style={{overlay: {backgroundColor: 'rgba(220, 220, 220, .8)'}}}
      className='add-bill-modal'>

      <header className='modal-header'>
        <h3 className='modal-h3'>Add a bill</h3>
        <b className='modal-exit'onClick={this.closeModal}><i className="fas fa-times"></i></b>
      </header>
      <form onSubmit={this.handleSubmit()} className='add-bill-form'>
        <div className='modal-name-input'>With you and: &nbsp;&nbsp;
          <select className='add-names-modal'
            onChange={this.handleInput('friend')}
            placeholder='Enter name'>
            {friends.map(friend => (
              <option>{friend.username}</option>
            ))}
          </select>
        </div>
        <br/>
          <div className='modal-desc'>
            <input className='description'
              value={this.state.description}
              onChange={this.handleInput('description')}
              placeholder='Enter a Description'>
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


  render() {
    return (
      <div className='test'>
        <SideBar/>

        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Expenses</h1>
            <button className='settle'>Settle up</button>
            <button onClick={this.openModal} className='add-bill'>Add a Bill</button>
          </div>
          <div className='bills-items'>
            {this.state.loading ?
               'loading' :
            <ul className='ul-bills'>
              {this.props.bills.map( bill => (
                <li key={bill.id} className='bills-list-item'>
                  <BillItem
                    bill={bill}
                    currentUser={this.props.currentUser}
                    friends={this.props.friends}
                    deleteBill={this.props.destroyBill}/>
                </li>
              ))}
            </ul>
          }
          </div>
        </div>
        <div className='bills-index-sidebar'>YOUR TOTAL BALANCE
          <div className='bills-index-total' style={{color:this.props.totalAmount < 0 ? '#ff652f':'#5bc5a7'}}>
            {this.props.totalAmount < 0 ? 'YOU OWE' : 'YOU ARE OWED'}
            <div style={{fontSize: '25px', fontWeight: 'boldest'}}>
              ${Math.abs(this.props.totalAmount)}
            </div>
          </div>
        </div>
        {this.modal()}
      </div>
    )
  }
}


export default BillsIndex;
