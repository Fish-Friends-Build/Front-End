import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FishingSpotsCard from './FishingSpotsCard';
import { Container, Row } from 'reactstrap'
import LocationSearchForm from './LocationSearchForm';
import { FishingSpotsContext } from '../contexts/FishingSpotsContext';
import style from 'styled-components';


const FishingSpotsAPI = () => {
    const {FishingSpotsData, setFishingSpotsData} = useContext(FishingSpotsContext);
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
                console.log('API Is Here: ', response.data);
                setFishingSpotsData(response.data);
            })
            .catch(error => {
                console.log('Whoops go back, thats an error!', error);
            });

        // getSearch();
    }, [setFishingSpotsData]);

    useEffect(() => {
        const results = FishingSpotsData.filter(stat => {
            return stat.fish_spec.toLowerCase().includes(searchTerm.toLowerCase()) || stat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                stat.county.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(results);
        //eslint-disable-next-line
    }, [searchTerm]);

    // console.log(FishingSpotsData);

const BorderDiv = style.div`
border: groove 10px #f11212;
width: 75%;
background: rgba(255,255,255,0.7);
margin: 1% auto;

`
    return (
        <section>
            <div>
                <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
                <BorderDiv>
                <Container>
                    <Row>
                        
                        {searchResults.map(data => (
                            <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
                        ))}
                    </Row>
                </Container>
                </BorderDiv>
            </div>

            <div>
                <Container>
                    <Row>
                        {FishingSpotsData.map(data => (
                            <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}
export default FishingSpotsAPI;
