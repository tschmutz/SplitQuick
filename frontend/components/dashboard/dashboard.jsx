import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import Friends from '../friends/friends_container';
import Modal from 'react-modal';
import AddModal from '../modal/modal'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  this.state = {modalIsOpen: false}


  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  };

  componentDidMount() {
    this.props.requestBills()
    this.props.requestUsers();
    this.props.requestFriends();
  }

  handleSubmit(args) {
    event.preventDefault();
    return (event) => this.props.createBill(args)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {

    const totalStyle = this.props.totalAmount > 0 ? '#5bc5a7' : '#ff652f'

    return (
      <div className='test'>
        <SideBar bills={this.state.bills}
                friends={this.state.friends}
                users={this.state.users}/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Dashboardy</h1>
            <button className='settle'>Settle up</button>

            <button onClick={this.openModal} className='add-bill'>Add a Bill</button>
          </div>
          <div className='balances-block'>
            <div style={{color: '#5bc5a7'}}className='balances'>you are owed <br/>${this.props.amountLent}</div>
            <div style={{color: '#ff652f'}}className='balances'>you owe<br/>${this.props.amountBorrowed}</div>
            <div style = {{color: totalStyle}}className='balances'>total balance<br/>${this.props.totalAmount}</div>
          </div>
        </div>
        <div className='sidebar'>
        </div>
        {this.state.modalIsOpen &&
          <AddModal isOpen={this.state.modalIsOpen}
                    addBill={this.handleSubmit}
                    closeModal={this.closeModal}/>}
      </div>
    )
  }
}

export default Dashboard
