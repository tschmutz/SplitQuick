import React from 'react';
import SideBar from '../sidebar/side_bar_container';


class BillsIndex extends React.Component {
  constructor(props) {
    super(props)
  };




  render() {
    console.log(this.props);
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
            <ul>
              {this.props.bills.map( bill => (
                <li>{bill.amount}</li>
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
