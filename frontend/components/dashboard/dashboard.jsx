import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import Friends from '../friends/friends_container';
import Modal from 'react-modal';
import AddModal from '../modal/addModal'
import SettleModal from '../modal/settleModal'
import { Link } from 'react-router-dom'

// Modal.setAppElement('root')

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    addModalIsOpen: false,
    settleModalIsOpen: false
  }

  this.openAddModal = this.openAddModal.bind(this);
  this.closeAddModal = this.closeAddModal.bind(this);
  this.openSettleModal = this.openSettleModal.bind(this);
  this.closeSettleModal = this.closeSettleModal.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this)

  };

  componentDidMount() {
    this.props.requestBills()
    this.props.requestUsers();
    this.props.requestFriends();
  }

  handleSubmit(args) {
    event.preventDefault();
    this.setState({addModalIsOpen: false})
    this.props.newBill(args)
  }

  openAddModal() {
    this.setState({addModalIsOpen: true});
  }

  closeAddModal() {
    this.setState({addModalIsOpen: false});
  }
  openSettleModal() {
    this.setState({settleModalIsOpen: true});
  }

  closeSettleModal() {
    this.setState({settleModalIsOpen: false});
  }


  render() {
    const oweList = this.props.friendsOwesArray.filter(friend => {
      return friend[1] < 0
    })
    const owedList = this.props.friendsOwesArray.filter(friend => {
      return friend[1] > 0
    })
    const totalStyle = this.props.totalAmount > 0 ? '#5bc5a7' : '#ff652f'

    return (
      <div className='test'>
        <SideBar />
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Dashboard</h1>
            <button onClick={this.openSettleModal} className='settle'>Settle up</button>

            <button onClick={this.openAddModal} className='add-bill'>Add a Bill</button>
          </div>
          <div className='balances-block'>
            <div style={{color: '#5bc5a7'}}className='balances'>you are owed <br/>${this.props.amountLent}</div>
            <div style={{color: '#ff652f'}}className='balances'>you owe<br/>${this.props.amountBorrowed}</div>
            <div style = {{color: totalStyle}}className='balances'>total balance<br/>${this.props.totalAmount}</div>
          </div>
          <div className='dashboard-list'>
            <div className='dashboard-owelist'>YOU OWE
                <ul>
                  {oweList.map(friend => {
                    return <li key={friend[0]}>
                              <Link to={`/friend/${friend[0]}`} key={friend[0]} className='friend-index-item' >

                                <span style={{color: 'black'}}>
                                  {this.props.friends[friend[0]].username}
                                </span>
                                <br/>
                                <span style={{color: '#ff652f'}}>
                                  you owe ${Math.abs(friend[1])}
                                </span>
                              </Link>
                          </li>
                  })}
                </ul>
            </div>
            <div className='dashboard-owedlist'>YOU ARE OWED
                <ul>
                  {owedList.map(friend => {
                    return <li key={friend[0]}>
                              <Link to={`/friend/${friend[0]}`} key={friend[0]} className='friend-index-item' >
                                  <span style={{color: 'black'}}>
                                    {this.props.friends[friend[0]].username}
                                  </span>
                                <br/>
                                  <span style={{color:'#5bc5a7'}}>
                                      owes you ${friend[1]}
                                  </span>
                            </Link>
                          </li>
                  })}
                </ul>
            </div>
          </div>
        </div>
        <div className='sidebar'>
        </div>
        {this.state.addModalIsOpen &&
          <AddModal isOpen={this.state.addModalIsOpen}
                    addBill={this.handleSubmit}
                    closeModal={this.closeAddModal}/>}
        {this.state.settleModalIsOpen &&
          <SettleModal isOpen={this.state.settleModalIsOpen}
                    addBill={this.handleSubmit}
                    closeModal={this.closeSettleModal}/>}
      </div>
    )
  }
}

export default Dashboard
