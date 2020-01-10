import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FishingSpotsCard from './FishingSpotsCard';
import LocationSearchForm from './LocationSearchForm';
import { FishingSpotsContext } from '../contexts/FishingSpotsContext';
import style from 'styled-components';
import {  Container, Row } from 'reactstrap';

const BorderDiv = style.div`
border: groove thick #f11212;
width: 75%;
background: rgba(255,255,255,0.7);
margin: 1% auto;
`

// const ResultsContainer = style.div`
//     max-width: 99%;
//     display: flex;
//     flex-wrap: wrap;
//     align-items: stretch;
//     justify-content: space-evenly;
//     margin: 0 auto;
// `

const FishingSpotsAPI = () => {
    const { FishingSpotsData, setFishingSpotsData } = useContext(FishingSpotsContext);
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
    }, []);

    useEffect(() => {
        const results = FishingSpotsData.filter(stat => {
            return stat.fish_spec.toLowerCase().includes(searchTerm.toLowerCase()) || stat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                stat.county.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(results);
        //eslint-disable-next-line
    }, [searchTerm]);

    // console.log(FishingSpotsData);

    if (searchResults.length === 0) {
        return (
            <>
            <section>
                <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
            </section>
            
                <BorderDiv>   
                    <Container className='results'>
                        <Row>
                        {FishingSpotsData.map(data => (
                            <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
                        ))}
                        </Row>
                    </Container>
                </BorderDiv>
            </>
        )
    } else {
        return (
            <>
            <section>
                <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
            </section>
            
                <BorderDiv>
                    <Container className='results'>
                        <Row>
                        {FishingSpotsData.map(data => (
                            <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
                        ))}
                        </Row>
                    </Container>
                </BorderDiv>
            
            </>
        )
    }

  // return (
  //     <section>
  //         <div>
  //             <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
  //             <BorderDiv>
  //                 <ResultsContainer>
  //                     {searchResults.map(data => (
  //                         <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
  //                     ))}
  //                 </ResultsContainer>
  //             </BorderDiv>
  //         </div>

  //         <div>
  //             <BorderDiv>
  //                 <ResultsContainer>
  //                     {FishingSpotsData.map(data => (
  //                         <FishingSpotsCard key={data} name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc} pdf={data.site_wl} />
  //                     ))}
  //                 </ResultsContainer>
  //             </BorderDiv>
  //         </div>
  //     </section>
  // );
};
export default FishingSpotsAPI;
