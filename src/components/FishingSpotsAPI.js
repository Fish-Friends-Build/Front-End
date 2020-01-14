import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FishingSpotsCard from './FishingSpotsCard';
import LocationSearchForm from './LocationSearchForm';
import { FishingSpotsContext } from '../contexts/FishingSpotsContext';
import style from 'styled-components';
import { Row } from 'reactstrap';

const BorderDiv = style.div`
border: groove thick #f11212;
width: 98%;
background: rgba(255,255,255,0.5);
margin: 1% auto;
`

const ResultsContainer = style.div`
     max-width: 99%;
     display: flex;
     flex-wrap: wrap;
     align-items: stretch;
     justify-content: space-evenly;
     margin: 0 auto;
 `


const FishingSpotsAPI = () => {
    const { FishingSpotsData, setFishingSpotsData } = useContext(FishingSpotsContext);
    const [ fishingSpotsNoKey, setFishingSpotsNoKey ] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    //eslint-disable-next-line
    const [searchResults, setSearchResults] = useState(FishingSpotsData);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        axios
            .get('https://data.ny.gov/resource/jcxg-7gnm.json/')
            .then(response => {
                setFishingSpotsNoKey(response.data);
            })
            .catch(error => {
                console.log('Whoops go back, thats an error!', error);
            });



        // getSearch();
    }, []);

    useEffect(() => {
        let dataWithKey = []
        for (let i = 0; i < fishingSpotsNoKey.length; i++) {
            // console.log(FishingSpotsNoKey[i]);
            dataWithKey.push({...fishingSpotsNoKey[i], key: i})
        }
        // console.log(dataWithKey);
        setFishingSpotsData(dataWithKey);
    }, [fishingSpotsNoKey, setFishingSpotsData])



    useEffect(() => {
        const results = FishingSpotsData.filter(stat => {
            return stat.fish_spec.toLowerCase().includes(searchTerm.toLowerCase()) || stat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                stat.county.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(results);
        //eslint-disable-next-line
    }, [searchTerm]);

    if (searchResults.length === 0) {
        return (
            <>
                <section>
                    <h3 style={{color: "white", marginBottom: "1.5%"}}>Search</h3>
                    <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
                </section>

                <BorderDiv>
                    <ResultsContainer>
                        <Row>
                            {FishingSpotsData.map(data => (
                                <FishingSpotsCard key={data.key} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
                            ))}
                        </Row>
                    </ResultsContainer>
                </BorderDiv>
            </>
        )
    } else {
        return (
            <>
                <section>
                    <h3 style={{color: "white", marginBottom: "1.5%"}}>Search</h3>
                    <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
                </section>

                <BorderDiv>
                    <ResultsContainer className='results'>
                        <Row>
                            {searchResults.map(data => (
                                <FishingSpotsCard key={data.key} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
                            ))}
                        </Row>
                    </ResultsContainer>
                </BorderDiv>

            </>
        )
    }
};
export default FishingSpotsAPI;
