import React, { useContext } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Form, FormField, Label, Input } from 'semantic-ui-react';

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
      .post('/journals', {
        ...JournalPostData,
        location: props.match.params.name
      })
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
    
        <FormGroup >
          <Label>Number Of Fish Caught</Label>
          <Input  required type="number" name="numFishCaught" id="numFishCaught" />
        </FormGroup>

        <FormGroup >
          <Label>Date</Label>
          <Input required type="date" name="date" id="date" />
        </FormGroup>

        <FormGroup >
          <Label>Time of Day</Label>
          <Input required type="text" name="timeOfDay" id="timeOfDay" />
        </FormGroup>

        <FormField>
          <Label>Type Of Fish</Label>
          <Input
            type="text"
            name="fishType"
            id="fishType"
            placeholder="What Fish Did You Catch?"
          />
        </FormField>

        <FormField>
          <Label>Type Of Bait</Label>
          <Input
            type="text"
            name="bait"
            id="bait"
            placeholder="What's The Secret There Partner?"
          />
        </FormField>


        <FormGroup tag="fieldset">
          <FormGroup   check>
            <Label  check> 
            <Input required type="radio" name="bankOrBoat" value="Bank" /> Bank 
            <br/>Or <br/>
            <Input type="radio" name="bankOrBoat" value="Boat" />Boat
            </Label>
          </FormField>
        </Form>

        <FormGroup  check>
          <Label check>
            <Input required type="radio" name="waterType" value="FreshWater" /> Fresh Water 
            <br/> Or <br/>
            <Input type="radio" name="waterType" value="SaltWater" />Salt Water
          </Label>
        </FormGroup>

        <FormField>
          <Label>Remember To...</Label>
          <Input
            required 
            type="textarea"
            name="notes"
            id="notes"
            placeholder="Bring the chair, Take bug spray, feed the dog etc..."
          />
        </FormField>

        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default JournalPost;
