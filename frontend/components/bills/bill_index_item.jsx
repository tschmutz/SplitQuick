import React from 'react';


class BillItem extends React.Component {
  constructor(props) {
    super(props)

  };



  render() {
    const lendeeId = this.props.bill.lendee;
    const lenderId = this.props.bill.lender;

    const lender = lenderId == this.props.currentUser.id ? 'You' : this.props.bill.lender_username;
    const lendee = lender === 'You' ?  this.props.bill.lendee_username  :'You';

    const amount = Number((this.props.bill.amount)).toFixed(2)
    const style = lendee === 'You' ? {color: '#ff652f'} : {color: '#5bc5a7'}
    return (
      <div className='bill-item-wrapper'>
        <div className='bill-item-main-block'>
          <div className='bill-item-date'>
            <div className='bill-item-month'>
              {this.props.bill.month}
            </div>
            <div className='bill-item-day'>
              {this.props.bill.day}
            </div>
          </div>
          <div className='bill-item-dolla'>
            <i className="far fa-money-bill-alt"></i>
          </div>
          <div className='bill-item-header'>
            <span>{this.props.bill.title}</span>
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
            <div onClick={() => this.props.deleteBill(this.props.bill.id)} className='trashycany'>
              <i  id='trashcan' style={{color: 'red'}}
                  className={this.props.bill.settled ? 'none' : "fas fa-trash-alt"}>
                  {this.props.bill.settled ? 'settled': ''}
              </i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BillItem;
