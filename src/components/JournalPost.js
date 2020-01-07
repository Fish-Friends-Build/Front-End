import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { JournalPostContext } from '../contexts/JournalPostContext';
import axiosWithAuth from '../utils/axiosWithAuth';

const JournalPost = props => {
  // const { post, deletePost } = useContext(JournalPostContext);

  const [journal, setJournal] = useState({
    numFishCaught: [],
    date: '',
    timeOfDay: '',
    location: '',
    fishType: [''],
    bait: '',
    bankOrBoat: '',
    waterType: '',
    notes: ''
  });

  const handleChanges = e => {
    setJournal({ journal, [e.target.name]: e.target.value });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post('/api/journals', post)
  //     .then(res => {
  //       props.history.push('/');
  //     })
  //     .catch(err => {
  //       console.log('unable to post', err);
  //     });
  // };
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">Number Of Fish Caught</Label>
        <Input type="number" name="numFishCaught" id="numFishCaught" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDatetime">Datetime</Label>
        <Input type="datetime-local" name="date" id="date" />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          placeholder="How Did I Get There Again?"
        />
      </FormGroup>
      <FormGroup>
        <Label for="fishType">Type Of Fish</Label>
        <Input
          type="text"
          name="fishType"
          id="fishType"
          placeholder="What Fish Did You Catch?"
        />
      </FormGroup>
      <FormGroup>
        <Label for="bait">Type Of Bait</Label>
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
            <Input type="radio" name="bankOrBoat" /> Bank Or Boat
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="waterType" /> FreshWater Or Saltwater
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="notes">Remember To...</Label>
        <Input
          type="textarea"
          name="notes"
          id="notes"
          placeholder="Bring the chair, Take bug spray, feed the dog etc..."
        />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup> */}

      <Button>Submit</Button>
    </Form>
  );
};

export default JournalPost;
