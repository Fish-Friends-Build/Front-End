import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FishingSpotsCard from './FishingSpotsCard';
import LocationSearchForm from './LocationSearchForm';




    const FishingSpotsAPI =() => {
        
        const [info, setInfo] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        //eslint-disable-next-line
        const [searchResults, setSearchResults] = useState(info);
      
        const handleChange = event => {
          setSearchTerm(event.target.value);
        };

            useEffect(() => {
        const getSearch = () =>{
            axios
                .get('https://data.ny.gov/resource/jcxg-7gnm.json/') 
                .then(response => {
                    console.log('API Is Here: ', response.data[`500...545`]); 
                    setInfo(response.data);
                })
                .catch(error => {
                    console.log('Whoops go back, thats an error!', error);
                });
            };
        
            const results = info.filter(stat => {
            return stat.fish_spec.toLowerCase().includes(searchTerm.toLowerCase());
            });
        
            getSearch();
            setSearchResults(results);
            //eslint-disable-next-line
        }, [searchTerm]);
            console.log(info);

        return(
            <section>
            <div>
                <LocationSearchForm searchTerm={searchTerm} handleChange={handleChange} />
                {searchResults.map(data => (
                <FishingSpotsCard name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc}/>
        ))}
            </div> 
             <div>
                {info.map(data=> (
                <FishingSpotsCard name={data.name} county={data.county} bestFish={data.fish_spec} access={data.public_acc}/>
            ))}
            </div>
            </section>
        );
    }
        export default FishingSpotsAPI;

       // https://cors-anywhere.herokuapp.com/