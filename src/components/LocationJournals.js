import React, { useEffect, useContext, useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const LocationJournals = props => {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/journals')
            .then(res => {
                console.log(res.data);

                let journalGet = [];
                // console.log(props.match.params.name);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data.location === props.match.params.name) {
                        console.log(res.data[i]);
                        journalGet.push(res.data[i]);
                    }
                }
                console.log(journalGet);
                setJournals(journalGet);

            })
            .catch(err => console.log("LocationJournals get error: ", err));
    }, []);

    return (
        <>
            {journals.map(entry => (
                <p>Location Name: {entry.location}</p>
            ))}
        </>
    )
}

export default LocationJournals;