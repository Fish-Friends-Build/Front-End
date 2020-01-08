import React, { useEffect, useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const LocationJournals = props => {
    const [journals, setJournals] = useState([{
        numFishCaught: null,
        date: "",
        timeOfDay: "",
        location: "",
        fishType: [""],
        bait: "",
        bankOrBoat: "",
        waterType: "",
        notes: null,
        username: ""
    }]);

    useEffect(() => {
        axiosWithAuth()
            .get('/journals')
            .then(res => {
                let journalGet = [];
                // console.log(props.match.params.name);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].location === props.match.params.name) {
                        // console.log(res.data[i]);
                        journalGet.push(res.data[i]);
                    }
                }
                journalGet.sort(function(a,b){
                    return new Date(b.date) - new Date(a.date)
                  })
                console.log(journalGet);
                setJournals(journalGet);

            })
            .catch(err => console.log("LocationJournals get error: ", err));
    }, []);

    console.log(journals);

    return (
        <>
            {journals.map(entry => (
                <div className="global-journal-cards">
                    <h4>Location Name: {entry.location}</h4>
                    <p>Date: {entry.date}</p>
                    <p>Time of Day: {entry.timeOfDay}</p>
                    <p>Number of Fish Caught: {entry.numFishCaught}</p>
                    <p>Fish Type: {entry.fishType}</p>
                    <p>Bait Type: {entry.bait}</p>
                    <p>Bank or Boat: {entry.bankOrBoat}</p>
                    <p>Fresh Water or Salt Water: {entry.waterType}</p>
                    <p>NOTES: {entry.notes}</p>
                    <p>posted by: {entry.username}</p>
                </div>

            ))}
        </>
    )
}

export default LocationJournals;