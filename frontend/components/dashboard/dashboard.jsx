import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import Friends from '../friends/friends_container';
import Modal from 'react-modal';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  this.state = {modalIsOpen: false}


  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  };



  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
      <form onSubmit={this.handleSubmit} className='add-bill-form'>
        <div className='modal-name-input'>With you and: &nbsp;&nbsp;
          <select className='add-names-modal'
            placeholder='Enter name'>
          </select>
        </div>
        <br/>
        <div className='modal-desc'>
          <input className='description'
            placeholder='Enter a Description'>
          </input>
          <br/>
          <div className='modal-amount-container'>
            <input className='modal-amount'
              placeholder='$0.00'>
            </input>
          </div>
          <button className='modal-add-bill' type='submit'>Add Bill</button>
        </div>

      </form>

      </Modal>
    )
  }


  render() {
    let bills = this.props.bills.values
    console.log(bills);
    let billsLent;
    let billsOwed;
    console.log(this.props.bills);
    console.log("------------------------");
    console.log(this.props.bills);
    // console.log(billsLent);
    console.log("------------------------");
    if(bills) {
      billsLent = bills.reduce(bill, next => bill + next)
    }
    return (
      <div className='test'>
        <SideBar/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Dashboard</h1>
            <button className='settle'>Settle up</button>

            <button onClick={this.openModal} className='add-bill'>Add a Bill</button>
          </div>
          <div className='balances-block'>
            <div className='balances'>you are owed <br/>${this.props.bills.totalLent}</div>
            <div className='balances'>you owe<br/>${this.props.bills.totalBorrowed}</div>
            <div className='balances'>total balance<br/>${this.props.bills.total}</div>
          </div>
        </div>
        <div className='sidebar'>
        </div>
        {this.modal()}
      </div>
    )
  }
}

export default Dashboard
