import React, { useContext } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, FormGroup, FormField, Label, Input } from 'semantic-ui-react';

import { JournalPostContext } from '../contexts/JournalPostContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import style from 'styled-components';

const StyleForm = style.form`
display: flex;
align-items: center;
flex-flow: column;
width: 25%;
margin: 0 auto;
padding: 2%;
border: thin solid #8dba20;
border-radius: 1px;
background: rgba(255, 255, 255, .1);
font-family: 'Abel', sans-serif;
color: #eee
background: rgba(0,0,0,0.7);
`;

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
    <StyleForm onChange={handleChanges} onSubmit={handleSubmit}>
      <h3>{props.match.params.name}</h3>
      
      <FormField>
    
        <FormGroup  style={{margin: '2%'}}> 
          <Label style={{background: 'rgba(255,255,255,0.5)'}}>Number Of Fish Caught
          <Input  required type="number" name="numFishCaught" id="numFishCaught" />
          </Label>
        </FormGroup>

        <FormGroup  style={{margin: '2%'}}>
          <Label style={{background: 'rgba(255,255,255,0.5)'}}>Date
          <Input required type="date" name="date" id="date" />
          </Label>
        </FormGroup>

        <FormGroup style={{margin: '2%'}}>
          <Label style={{background: 'rgba(255,255,255,0.5)'}}>Time of Day
          <Input required type="text" name="timeOfDay" id="timeOfDay" />
          </Label>
        </FormGroup>

        <FormGroup style={{margin: '2%'}}>
          <Label style={{background: 'rgba(255,255,255,0.5)'}}>Type Of Fish
          <Input
            type="text"
            name="fishType"
            id="fishType"
            placeholder="What Fish Did You Catch?"
          />
          </Label>
        </FormGroup>

        <FormGroup style={{margin: '2%'}}>
          <Label style={{background: 'rgba(255,255,255,0.5)'}}>Type Of Bait
          <Input
            type="text"
            name="bait"
            id="bait"
            placeholder="What's The Secret There Partner?"
          />
          </Label>
        </FormGroup>


        <FormField tag="fieldset">

          <FormGroup  style={{margin: '2%'}} check> 
            <Label style={{background: 'rgba(255,255,255,0.5)'}} check> 
            <Input required type="radio" name="bankOrBoat" value="Bank" /> Bank 
            <br/>Or <br/>
            <Input type="radio" name="bankOrBoat" value="Boat" />Boat
            </Label>
         </FormGroup>
          

        <FormGroup style={{margin: '2%'}} check>
          <Label style={{background: 'rgba(255,255,255,0.5)'}} check>
            <Input required type="radio" name="waterType" value="FreshWater" /> Fresh Water 
            <br/> Or <br/>
            <Input type="radio" name="waterType" value="SaltWater" />Salt Water
          </Label>
        </FormGroup>
        
        </FormField>

        <FormGroup style={{margin: '2%'}}>
          <Label style={{background: 'rgba(255,255,255,0.5)'}}>Session Notes...
          <Input
            required 
            type="textarea"
            name="notes"
            id="notes"
            placeholder="Remember to bring the chair, Take bug spray, feed the dog etc..."
          /></Label>
        </FormGroup>

        <Button style={{
							border: "thin solid #12a0f1",
							background: "#333333",
							fontWeight: "900",
							textAlign: "center",
							color: "#eee",
							margin: "4% auto",
							height: "auto",
							transition: "all 0.15s ease-in-out",
						}}
        >Submit</Button>
      </FormField>
      </StyleForm>
    </>
  );
};

export default JournalPost;
