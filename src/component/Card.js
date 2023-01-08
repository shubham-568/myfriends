import React from 'react';

const Card = ({ name, hobby }) => {
	return (
     <div className='bg-light-green dib br3 pa 3 ma3 grow bw2 shadow-5'>
       <img alt='friends' src={`https://robohash.org/${name}?200x200`} />
      <div>
       <h2>{name}</h2>
       <p>{hobby}</p>
      </div>
     </div>
)
}

export default Card;