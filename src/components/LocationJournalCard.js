import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const LocationJournalCard = ({
  numFishCaught,
  date,
  timeOfDay,
  location,
  fishType,
  bait,
  bankOrBoat,
  waterType,
  notes,
  username
}) => { 

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
      <Button onClick={(e)=>e.preventDefault()}>{username}</Button>
    </Card>
  );
};
export default LocationJournalCard;