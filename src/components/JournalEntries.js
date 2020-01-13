import React, { useContext, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import { JournalEntriesContext } from '../contexts/JournalEntriesContext';

import JournalEntriesCard from './JournalEntriesCard';

const JournalEntries = () => {
  const { JournalEntriesData, setJournalEntriesData } = useContext(
    JournalEntriesContext
  );
  const userID = sessionStorage.getItem('user-id');

  useEffect(() => {
    axiosWithAuth()
      .get(`journals/user/${userID}`)
      .then(res => setJournalEntriesData(res.data))
      .catch(err => console.log(err));
  }, [userID, setJournalEntriesData]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'stretch',
          justifyContent: 'space-evenly'
        }}
      >
        {JournalEntriesData.length ? (
          JournalEntriesData.map(entry => (
            <JournalEntriesCard
              id={entry.id}
              numFishCaught={entry.numFishCaught}
              date={entry.date}
              timeOfDay={entry.timeOfDay}
              location={entry.location}
              fishType={entry.fishType}
              bait={entry.bait}
              bankOrBoat={entry.bankOrBoat}
              waterType={entry.waterType}
              notes={entry.notes}
              key={entry}
            />
          ))
        ) : (
          <h1 style={{ color: 'whitesmoke' }}>No Entries Available</h1>
        )}
      </div>
    </>
  );
};

export default JournalEntries;
