import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LocationJournalCard from './LocationJournalCard';
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
                journalGet.sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date)
                })
                console.log(journalGet);
                setJournals(journalGet);

            })
            .catch(err => console.log("LocationJournals get error: ", err));
    }, []);

    console.log(journals);


    if (journals.length === 0) {
        return (
            <>
                <p>There are no entries for this location yet</p>
                <Link to={`/journal-post/${props.match.params.name}`}><button>Create New Journal Post</button></Link>
            </>
        )
    } else {

        return (
            <>
            <div style={{ display: "flex", flexWrap: "wrap", alignContent: "stretch", justifyContent: "space-evenly" }}>
                {journals.map(entry => (
                    <LocationJournalCard
                        numFishCaught={entry.numFishCaught}
                        date={entry.date}
                        timeOfDay={entry.timeOfDay}
                        location={entry.location}
                        fishType={entry.fishType}
                        bait={entry.bait}
                        bankOrBoat={entry.bankOrBoat}
                        waterType={entry.waterType}
                        notes={entry.notes}
                        username={entry.username}
                    />
                ))}
            </div>
            <Link to={`/journal-post/${props.match.params.name}`}><button>Create New Journal Post</button></Link>
            </>
        );
    }
}

export default LocationJournals;