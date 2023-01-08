import React from 'react';
import Card from './Card';

const FriendList = ({ friends }) => {
	return (
   <div>
   {
    friends.map((user, i) => {
        return (
        <Card 
        key={i}
        id={friends[i].id} 
        name={friends[i].name} 
        hobby={friends[i].hobby}
        />
        )
    })
}
   </div>
   );
}

export default FriendList;