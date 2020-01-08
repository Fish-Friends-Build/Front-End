import React, { useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { JournalPostContext } from '../contexts/JournalPostContext';
import axiosWithAuth from '../utils/axiosWithAuth';

const JournalPost = props => {
  const { JournalPostData, setJournalPostData } = useContext(JournalPostContext);

  const handleChanges = e => {
    setJournalPostData({ ...JournalPostData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/journals', { ...JournalPostData, location: props.match.params.name })
      .then(res => {
        console.log(res);
        props.history.push(`/location-journals/${props.match.params.name}`);
      })
      .catch(err => {
        console.log('unable to post', err);
      });
  };

  return (
    <>
      <h3>{props.match.params.name}</h3>
      <Form onChange={handleChanges} onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Number Of Fish Caught</Label>
          <Input type="number" name="numFishCaught" id="numFishCaught" />
        </FormGroup>

        <FormGroup>
          <Label>Date</Label>
          <Input type="date" name="date" id="date" />
        </FormGroup>

        <FormGroup>
          <Label>Time of Day</Label>
          <Input type="text" name="timeOfDay" id="timeOfDay" />
        </FormGroup>

        <FormGroup>
          <Label>Type Of Fish</Label>
          <Input
            type="text"
            name="fishType"
            id="fishType"
            placeholder="What Fish Did You Catch?"
          />
        </FormGroup>

        <FormGroup>
          <Label>Type Of Bait</Label>
          <Input
            type="text"
            name="bait"
            id="bait"
            placeholder="What's The Secret There Partner?"
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <FormGroup check>
            <Label check>
            <Input type="radio" name="bankOrBoat" value="Bank" /> Bank Or Boat
            <Input type="radio" name="bankOrBoat" value="Boat" />
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="radio" name="waterType" value="FreshWater" /> Fresh Water Or Salt Water
            <Input type="radio" name="waterType" value="SaltWater" />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>Remember To...</Label>
          <Input
            type="textarea"
            name="notes"
            id="notes"
            placeholder="Bring the chair, Take bug spray, feed the dog etc..."
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default JournalPost;
