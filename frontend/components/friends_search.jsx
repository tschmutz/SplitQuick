import React from 'react';


class FriendsSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchName: '',  searchedName: ""}
  };

  // componentDidMount() {
  //   this.props.requestUsers();
  // }
  updateInfo() {
    return event => this.setState({
      searchName: event.target.value
    })
  }


  matches() {
    const matches = [];

    this.props.users.forEach(name => {
      let sub = name.username.slice(0, this.state.searchName.length);
      if (sub.toLowerCase() === this.state.searchName.toLowerCase() && name.username !== 'Guest') {
        matches.push(name.username);
      }
    });



    return matches;
  }




  render() {
      let results = this.matches().map((result, i) => {
    return (
      <li key={i} onClick={this.selectName}>
        <i color='white' className="fas fa-plus"></i>
        &nbsp;&nbsp;{result}</li>
    );
  });

    return (
      <form>
        <input value={this.state.searchName}
          placeholder='Search'
          onChange={this.updateInfo()}></input>
        <ul className='friend-search-list'>
          {results}
        </ul>

      </form>
    )
  }
}

export default FriendsSearch;



// <ul className='friends-search-list'>
//   {this.props.users.map(user => <li key={Date()}>{user.username}</li>)}
// </ul>
