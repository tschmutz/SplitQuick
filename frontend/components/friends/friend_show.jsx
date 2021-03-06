import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import Modal from 'react-modal';
import BillItem from '../bills/bill_index_item';
import SettleModal from '../modal/settleModal'

class  FriendShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      description: '',
      amount: '',
      payer: '',
      settleModalIsOpen: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.openModal = this.openModal.bind(this);
    this.openSettleModal = this.openSettleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeSettleModal = this.closeSettleModal.bind(this);
    this.friendsBills = this.friendsBills.bind(this);

  };

  componentDidMount() {
    this.props.requestFriends();
    this.props.requestUsers();
    this.props.requestBills();
    Modal.setAppElement=('#root');
  }

  handleDelete(id) {
    this.props.deleteFriend(id);
    this.props.history.goBack();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  openSettleModal() {
    this.setState({settleModalIsOpen: true});
  }

  closeSettleModal() {
    this.setState({settleModalIsOpen: false});
  }

  handleInput(type) {
    return event =>
    this.setState({
      [type]: event.target.value
    })
  }

  friendsBills() {
    let bills = [];
    let friendId = this.props.friend.id;
    let userId = this.props.currentUser.id
    this.props.bills.forEach(function(bill) {
      if((bill.lender === friendId && bill.lendee === userId ) ||
      (bill.lendee === friendId && bill.lender === userId )) {
        bills.push(bill);
      }
    })
    return bills;
  }

  organizeArguments() {
    this.clearState();
    const friend = this.props.friend;
    const lenderId = this.state.payer == 'user' ? this.props.currentUser.id : friend.id
    const lendeeId = lenderId == this.props.currentUser.id ? friend.id : this.props.currentUser.id
    return {
      amount: this.state.amount,
      title: this.state.description,
      lender_id: lenderId,
      lendee_id: lendeeId,
      settled: false
    }
  }

  clearState() {
    this.setState({
      modalIsOpen: false,
      description: '',
      amount: '',
      payer: ''
    })
  }

  handleSubmit() {
    event.preventDefault();
    return (event) => this.props.createBill(this.organizeArguments())
  }

  modal () {

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
        <div className='modal-name-input'>With you and {this.props.friend.username}
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
                  <option value='friend'>{this.props.friend.username}</option>
                </select>
            </div>

          <button className='modal-add-bill' type='submit'>Add Bill</button>
        </div>

      </form>

      </Modal>
    )
  }



  render() {
    var styles = {
    color:'black',
    };

    if (!this.props.friend) return null;

    return (
      <div className='test'>
        <SideBar/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>{this.props.friend.username}</h1>
            <button className='delete-friend' onClick={() => this.handleDelete(this.props.friend.id)}>
              <i style={styles} className="fas fa-trash-alt"></i>&nbsp;Delete Friend</button>
            <button className='settle' onClick={this.openSettleModal}>Settle up</button>
            <button  onClick={this.openModal} className='add-bill'>Add a Bill</button>
          </div>
          <div className='bills-items'>
            <ul className='ul-bills'>
              {this.props.bills.map( bill => (
                <li className='bills-list-item'>
                  <BillItem
                    bill={bill}
                    currentUser={this.props.currentUser}
                    friends={this.props.friends}
                    deleteBill={this.props.destroyBill}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='sidebar'>
        </div>
        {this.modal()}
        {this.state.settleModalIsOpen &&
          <SettleModal isOpen={this.state.settleModalIsOpen}
                    addBill={this.handleSubmit}
                    closeModal={this.closeSettleModal}/>}
      </div>
    )
  }
}

export default FriendShow
