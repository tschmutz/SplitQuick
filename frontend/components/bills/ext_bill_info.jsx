import React from 'react'
import {connect} from 'react-redux'



class BillInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    e.preventDefault
  }

  render() {


    return (
      <div className='bill-info'>

        Bill Comments
        <ul>
          {this.props.bill.comments.map(comment => {
            return <li>
                      {comment.body}
                  </li>
          })}
        </ul>
        <form type='text' onSubmit={this.hanldSubmit}>
          <input className='comment-body'
                 type='text'
                 placeholder='Add a Comment'>
          </input>
        </form>

      </div>
    )
  }

}

function mapStateToProps(state, hasOwnProps) {

}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BillInfo)
