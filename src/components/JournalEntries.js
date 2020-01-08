import React, { useState, useContext, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import JournalEntriesCard from './JournalEntriesCard';

const JournalEntries = () => {
  const [Entries, setEntries] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/journals/user/:id')
      .then(res => setEntries(res.data))
      .catch(err => console.log(err));
  });

  return (
    <>
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
    </>
  );
};

export default JournalEntries;
