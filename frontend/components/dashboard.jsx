import React from 'react';



class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard-header'>
          <h1>Dashboard</h1>
          <button className='settle'>Settle up</button>
          <button className='add-bill'>Add a Bill</button>

        </div>

      </div>
    )
  }
}

export default Dashboard
