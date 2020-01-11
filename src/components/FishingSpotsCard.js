import React from 'react';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import {Col} from 'reactstrap';

const StyleDiv = style.div`
    border: thin solid #8dba20;
    padding: 2%;
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
    width: 100%;
    margin: 1% auto;
    align-items: center;
    text-align: center
    font-family: 'Abel', sans-serif;
    color: #eee
    font-size: 20px;
    background: rgba(0,0,0,0.7);
    height: 100%;

    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 

    
    
    `
    const Button = style.button`
    display: block;
    border: thin solid #12a0f1
    border-radius: 4%;
    background: #333333
    font-weight: 900;
    text-align: center;
    margin: 2% auto;
    color: #eee;
    transition: all 0.15s ease-in-out;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    `
    const margin = {
        marginBottom: '1%',
    }
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
        <Col sm='6' md='4' lg= '2' style={margin}>
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
        </Col>
    );
}

export default FishingSpotsCard