import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import JournalEntriesCard from './JournalEntriesCard';

const JournalEntries = () => {
  const [Entries, setEntries] = useState([]);
  const userID = sessionStorage.getItem('user-id');

  useEffect(() => {
    axiosWithAuth()
      .get(`journals/user/${userID}`)
      .then(res => setEntries(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignContent: "stretch", justifyContent: "space-evenly" }}>
      {Entries.map(entry => (
        <JournalEntriesCard
          numFishCaught={entry.numFishCaught}
          date={entry.date}
          timeOfDay={entry.timeOfDay}
          location={entry.location}
          fishType={entry.fishType}
          bait={entry.bait}
          bankOrBoat={entry.bankOrBoat}
          waterType={entry.waterType}
          notes={entry.notes}
        />
      ))}
    </div>
  );
};

export default JournalEntries;
