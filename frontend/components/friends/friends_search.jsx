import React from 'react';


class FriendsSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchName: '',  searchedName: ""}
    this.selectName = this.selectName.bind(this)
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
    const friendId = []
      this.props.friends.forEach(name => friendId.push(name.id));
      friendId.push(this.props.currentUser);

    const matches = [];
    this.props.users.forEach(user => {
      let sub = user.username.slice(0, this.state.searchName.length);
      let nameMatch = sub.length >= 1 && sub.toLowerCase() === this.state.searchName.toLowerCase();
      let unwantedNames = (!friendId.includes(user.id));

      if (nameMatch && unwantedNames) {
        matches.push({username: user.username, id: user.id});
      }
    });
    return matches;
  }

  selectName(friendee) {
    event.preventDefault()
    const friender = this.props.currentUser;
    return (event) => this.props.befriend({friendee_id: friendee, friender_id: friender, status: 'active'})
  }




  render() {
    let divStyle = {
    color: '#ff652f',
  };
      let results = this.matches().map((result) => {
    return (
      <li key={result.id} onClick={this.selectName(result.id)}>
        <i style={divStyle} className="fas fa-plus"></i>
        &nbsp;&nbsp;{result.username}</li>
    );
  });

    return (
      <form className='friend-search-form'><i style={divStyle} className="fas fa-search"></i>&nbsp;
        <input value={this.state.searchName}
          placeholder= 'Search'
          onChange={this.updateInfo()}></input>
        <ul className='friend-search-list'>
          {results}
        </ul>

      </form>
    )
  }
}

export default FriendsSearch;
