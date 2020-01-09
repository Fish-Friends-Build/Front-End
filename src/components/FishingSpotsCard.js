import React from 'react';
import StarRating from './StarRating';
// import { Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import style from 'styled-components';

const StyleDiv = style.div`
    border: thin solid #8dba20;
    padding: 20px;
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
    width: 275px;
    margin: 1% auto;
    align-items: center;
    text-align: center
    font-family: 'Abel', sans-serif;
    color: #eeeeee
    font-size: 20px;
    background: rgba(0,0,0,0.7);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `
const Button = style.button`
display: block;
border: thin solid #12a0f1
border-radius: 5px;
background: #333333
font-weight: 700;
text-align: center;
line-height: 1.5;
margin: 2% auto;
color: #eee;
transition: all 0.15s ease-in-out;
&:hover {
    background: rgba(255, 255, 255, 0.2);
}
`
const accent = {
    border: 'thin solid #f11212'
}

const FishingSpotsCard = ({ name, county, bestFish, access, pdf }) => {

    const moreInfo = pdf => {
        if (pdf === undefined) {
            return (<div />)
        } else {
            return (<a rel="noopener noreferrer" target="_blank" href={pdf.url}><Button style={accent}>More Info</Button></a>)
        }
    }

    return (
        // <Col lg='auto' md='auto' sm='auto'>
        <StyleDiv>
            <div className="card-top">
                <h1>Location: {name}</h1>
                <h2>County: {county}</h2>
            </div>
            <div className="card-middle">
                <p>Catches Available: {bestFish}</p>
                <p>Access Rights: {access}</p>
                {moreInfo(pdf)}
            </div>
            <div className="card-bottom">
                <StarRating totalStars={5} />
                <Link to={`/location-journals/${name}`}><Button>View Journals</Button></Link>
                <Link to={`/journal-post/${name}`}><Button>Create New Journal Post</Button></Link>
            </div>
        </StyleDiv>
        // </Col>
    );
}

export default FishingSpotsCard