import React from 'react';


class RecentItem extends React.Component {
  constructor(props) {
    super(props)

  };


  render() {
    const lendeeId = this.props.bill.lendee;
    const lenderId = this.props.bill.lender;
    const bill = this.props.bill

    const lender = lenderId == this.props.currentUser.id ? 'You' : this.props.bill.lender_username;
    const lendee = lender === 'You' ?  this.props.bill.lendee_username  :'You';
    console.log(this.props);
    const amount = Number((this.props.bill.amount)).toFixed(2)
    const style = lendee === 'You' ? {color: '#ff652f'} : {color: '#5bc5a7'}
    return (
      <div className='recent-item'>
        <div className='bill-item-dolla'>
          <i className="far fa-money-bill-alt" style={{height: '40px', width:'80px'}}></i>
        </div>

        <div className='recent-item-info'>
          <div>
            {`You added "${bill.title}"`}
          </div>
          <div style={style}>
            {lendeeId === this.props.currentUser.id ? `You owe $${bill.amount}` : `You get back $${bill.amount}`}
          </div>
          <div className='bill-item-month'>
            {bill.month}{bill.day}
          </div>
        </div>
      </div>
    )
  }
}

export default RecentItem;
