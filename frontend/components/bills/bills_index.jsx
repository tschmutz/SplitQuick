import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import BillItem from './bill_index_item';

class BillsIndex extends React.Component {
  constructor(props) {
    super(props)
  };




  render() {
    console.log(this.props.friends);
    return (
      <div className='test'>
        <SideBar/>

        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Expenses</h1>
            <button className='settle'>Settle up</button>
            <button className='add-bill'>Add a Bill</button>
          </div>
          <div className='bills-items'>
            <ul className='ul-bills'>
              {this.props.bills.map(bill => (
                <li className='bills-list-item'>
                  <BillItem
                    key={bill.id}
                    month={bill.month}
                    day={bill.day}
                    title={bill.title}
                    amount={bill.amount}
                    lenderId={bill.lender}
                    lendeeId={bill.lendee}
                    currentUser={this.props.currentUser}
                    friends={this.props.friends}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='sidebar'>
        </div>
      </div>
    )
  }
}

export default BillsIndex;
