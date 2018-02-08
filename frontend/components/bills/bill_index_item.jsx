import React from 'react';


class BillItem extends React.Component {
  constructor(props) {
    super(props)

  };


  render() {
    const lendeeId = this.props.lendeeId;
    const lenderId = this.props.lenderId;
    console.log(this.props);
    const lender = this.props.lenderId == this.props.currentUser.id ? 'You' : this.props.friends[lenderId].username
    const lendee = lender == 'You' ? this.props.friends[lendeeId].username :'You'
    const amount = this.props.amount
    const style = lendee == 'You' ? {color: '#ff652f'} : {color: '#5bc5a7'}
    return (
      <div className='bill-item-wrapper'>
        <div className='bill-item-main-block'>
          <div className='bill-item-date'>
            <div className='bill-item-month'>
              {this.props.month}
            </div>
            <div className='bill-item-day'>
              {this.props.day}
            </div>
          </div>
          <div className='bill-item-dolla'>
            <i className="far fa-money-bill-alt"></i>
          </div>
          <div className='bill-item-header'>
            <span>{this.props.title}</span>
          </div>
        </div>
        <div className='bill-item-payer'>
          {lender} paid
          <div className='bill-item-lent-amount'>
            ${amount}
          </div>
        </div>
        <div className='bill-item-ower'>
          {lender} lent {lendee}
          <div style={style} className='bill-item-owed-amount'>
            ${amount}
          </div>
        </div>
      </div>
    )
  }
}

export default BillItem;
