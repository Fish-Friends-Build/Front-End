import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FishingSpotsCard from './FishingSpotsCard';
import {Container, Row} from 'reactstrap'
import LocationSearchForm from './LocationSearchForm';



const FishingSpotsAPI = () => {

    const [info, setInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    //eslint-disable-next-line
    const [searchResults, setSearchResults] = useState(info);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const getSearch = () => {
            axios
                .get('https://data.ny.gov/resource/jcxg-7gnm.json/')
                .then(response => {
                    console.log('API Is Here: ', response.data);
                    setInfo(response.data);
                })
                .catch(error => {
                    console.log('Whoops go back, thats an error!', error);
                });
        };

        const results = info.filter(stat => {
            return stat.fish_spec.toLowerCase().includes(searchTerm.toLowerCase())||stat.name.toLowerCase().includes(searchTerm.toLowerCase())||
            stat.county.toLowerCase().includes(searchTerm.toLowerCase());
        });

        getSearch();
        setSearchResults(results);
        //eslint-disable-next-line
    }, [searchTerm]);
    console.log(info);

    return (
        <section>
            <div>
                <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
                    <Container>
                    <Row>
                    {searchResults.map(data => (
                        <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl}/>
                    ))}
                    </Row>
                    </Container>
                
            </div>
            <div>
                <Container>
                <Row>
                {info.map(data => (
                    <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl}/>
                ))}
                </Row>
                </Container>
            </div>
        </section>
    );
}
export default FishingSpotsAPI;
