import React from 'react';
import StarRating from './StarRating';
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom';

const FishingSpotsCard = ({ name, county, bestFish, access, pdf }) => {

    const moreInfo = pdf => {
        if (pdf === undefined) {
            return (<div />)
        } else {
            return (<a rel="noopener noreferrer" target="_blank" href={pdf.url}><button>More Info</button></a>)
        }
    }

    return (
        <Col lg='3' md='4' sm='2'>
            <div>
                <h1>Location: {name}</h1>
                <h2>County: {county}</h2>
                <p>Catches Available: {bestFish}</p>
                <p>Access Rights: {access}</p>
                {moreInfo(pdf)}
                <StarRating totalStars={5} />
                <Link to={`/journal-post/${name}`}><button>Create New Journal Post</button></Link>
            </div>
        </Col>
    );
}


export default FishingSpotsCard