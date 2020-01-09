import React, { useContext } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, FormGroup, FormField, Label, Input } from 'semantic-ui-react';

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
      <FormField onChange={handleChanges} onSubmit={handleSubmit}>
    
        <FormGroup > 
          <Label>Number Of Fish Caught
          <Input  required type="number" name="numFishCaught" id="numFishCaught" />
          </Label>
        </FormGroup>

        <FormGroup >
          <Label>Date
          <Input required type="date" name="date" id="date" />
          </Label>
        </FormGroup>

        <FormGroup >
          <Label>Time of Day
          <Input required type="text" name="timeOfDay" id="timeOfDay" />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>Type Of Fish
          <Input
            type="text"
            name="fishType"
            id="fishType"
            placeholder="What Fish Did You Catch?"
          />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>Type Of Bait
          <Input
            type="text"
            name="bait"
            id="bait"
            placeholder="What's The Secret There Partner?"
          />
          </Label>
        </FormGroup>


        <FormField tag="fieldset">

          <FormGroup   check> 
            <Label  check> 
            <Input required type="radio" name="bankOrBoat" value="Bank" /> Bank 
            <br/>Or <br/>
            <Input type="radio" name="bankOrBoat" value="Boat" />Boat
            </Label>
         </FormGroup>
          

        <FormGroup  check>
          <Label check>
            <Input required type="radio" name="waterType" value="FreshWater" /> Fresh Water 
            <br/> Or <br/>
            <Input type="radio" name="waterType" value="SaltWater" />Salt Water
          </Label>
        </FormGroup>
        
        </FormField>

        <FormGroup>
          <Label>Session Notes...
          <Input
            required 
            type="textarea"
            name="notes"
            id="notes"
            placeholder="Remember to bring the chair, Take bug spray, feed the dog etc..."
          /></Label>
        </FormGroup>

        <Button>Submit</Button>
      </FormField>
    </>
  );
};

export default JournalPost;
