import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

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
    <Card
    style={{
      display: 'flex',
      flexFlow: 'row wrap',
      width: '20%',
      margin: '1%',
      border: 'thin solid #8dba20',
      borderRadius: '1px',
      fontFamily: 'Abel, sans-serif',
      background: 'rgba(0,0,0,0.7)',
    }}
  >
    {/* <Image src="/images/avatar/large/matthew.png" wrapped ui={false} /> */}
    <Card.Content>
      <Card.Header style={{color: '#eee'}}>{location}</Card.Header>
      <Card.Meta>
        <span className="date" style={{color: '#eee'}}>
          Caught on {date} {timeOfDay}
        </span>
      </Card.Meta>
      <Card.Description style={{color: '#eee'}}>Notes: {notes}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p style={{color: '#eee'}}>
        <Icon name="cuttlefish" />
        {numFishCaught} {fishType} Caught with {bait} at the {bankOrBoat} in{' '}
        {waterType}
      </p>
    </Card.Content>
      <Button onClick={e => e.preventDefault()}
       style={{
        border: 'thin solid #12a0f1',
        background: '#333333',
        fontWeight: '900',
        textAlign: 'center',
        width: '98%',
        color: '#eee',
        margin: '.5% auto',
        height: 'auto',
        transition: 'all 0.15s ease-in-out',
        }}>{username}</Button>
    </Card>
  );
};
export default LocationJournalCard;
