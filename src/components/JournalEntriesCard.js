import React, { useState } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

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
  const userID = sessionStorage.getItem('user-id');
  let history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    history.push(`/edit-entry-form/${userID}`);
  };

  return (
    <Card style={{margin:"0"}}>
      {/* <Image src="/images/avatar/large/matthew.png" wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{location}</Card.Header>
        <Card.Meta>
          <span className="date">
            Caught on {date} {timeOfDay}
          </span>
        </Card.Meta>
        <Card.Description>Notes: {notes}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>
          <Icon name="cuttlefish" />
          {numFishCaught} {fishType} Caught with {bait} at the {bankOrBoat} in {waterType}
        </p>
      </Card.Content>
      <Button onClick={handleClick}>Edit</Button>
    </Card>
  );
};
export default JournalEntriesCard;
