import React, { useState, useEffect } from 'react';
import axios from 'axios';





    const FishingSpotsAPI =() => {
        
        const [info, setInfo] = useState([]);

        useEffect(() => {
            axios
                .get('') //no API to work with just yet...doing push for the night will be searching for a new one in the am
                .then(data => {
                    console.log('API Is Here: ', data.data); 
                    setInfo(data.data);
                })
                .catch(error => {
                    console.log('Whoops go back, thats an error!', error);
                });
            }, []);
            console.log(info);

        return(
            <div>
                This Page Is Left Intentionally Blank
            </div>
        );
    }
        export default FishingSpotsAPI;

       // https://cors-anywhere.herokuapp.com/ (Use for CORS Error if Needed)