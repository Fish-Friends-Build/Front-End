import React from 'react';

const JournalEntriesCard = ({
  numFishCaught,
  date,
  timeOfDay,
  location,
  fishType,
  bait,
  bankOrBoat,
  waterType,
  notes
}) => {
  return (
    <div>
      <h1>{numFishCaught}</h1>
      <h1>{date}</h1>
      <h1>{timeOfDay}</h1>
      <h1>{location}</h1>
      <h1>{fishType}</h1>
      <h1>{bait}</h1>
      <h1>{bankOrBoat}</h1>
      <h1>{waterType}</h1>
      <p>{notes}</p>
    </div>
  );
};
export default JournalEntriesCard;
