import React from 'react';
import StarRating from './StarRating';
const FishingSpotsCard = ({name, county, bestFish, access}) =>{




    return(
        <div>
            <h1>Location: {name}</h1>
            <h2>County: {county}</h2>
            <p>Catches Available: {bestFish}</p>
            <p>Access Rights: {access}</p>
            <StarRating totalStars={5} />
        </div>
        

    );
}


export default FishingSpotsCard