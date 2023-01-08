import React, { Component } from 'react';
import FriendList from '../component/FriendList';
import SearchBox from '../component/SearchBox';
import { friends } from '../container/friends';
import Scroll from '../component/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: friends,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=> response.json())
    //     .then(users => this.setState({ friends: users}));
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { friends, searchfield } = this.state
        const filteredFriends = friends.filter(friend => {
          return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (friends.length === 0) {
            return <h1> loading </h1>
        } else {
    return (
        <div className='tc'>
    <h1 className='f1'>FRIENDS</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <FriendList friends={filteredFriends}/>
    </Scroll>
    </div>
     );
}
}
}
export default App;