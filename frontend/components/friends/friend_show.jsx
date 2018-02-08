import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import Modal from 'react-modal'

class  FriendShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {modalIsOpen: false}

    this.handleDelete = this.handleDelete.bind(this)
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

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
        <div className='modal-name-input'>With you and {this.props.friend.username}
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
            <div className="wrapper-dropdown" tabindex="1">
                <select className='select-dropdown' name="cars">
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
  // <button className='paid-by'>Paid by</button>


  render() {
    var styles = {
    color:'black',
  };
    return (
      <div className='test'>
        <SideBar/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>{this.props.friend.username}</h1>
            <button className='delete-friend' onClick={() => this.handleDelete(this.props.friend.id)}>
              <i style={styles} className="fas fa-trash-alt"></i>&nbsp;Delete Friend</button>
            <button className='settle'>Settle up</button>
            <button  onClick={this.openModal} className='add-bill'>Add a Bill</button>
          </div>
        </div>
        <div className='sidebar'>
        </div>
        {this.modal()}
      </div>
    )
  }
}

export default FriendShow
