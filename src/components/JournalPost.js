import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const JournalPost = props => {
  // const handleChanges = e => {
  //   setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   AxiosWithAuth()
  //     .post('/login', userLoginInfo)
  //     .then(res => {
  //       localStorage.setItem('token', res.data.payload);

  //       props.history.push('/bubblepage');
  //     })
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">Number Of Fish Caught</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>More!!!</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleDatetime">Datetime</Label>
        <Input
          type="datetime-local"
          name="datetime"
          id="exampleDatetime"
          placeholder="datetime placeholder"
        />
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
        <Label for="typeOfFish">Type Of Fish</Label>
        <Input
          type="text"
          name="typeOfFish"
          id="typeOfFish"
          placeholder="What Fish Did You Catch?"
        />
      </FormGroup>
      <FormGroup>
        <Label for="typeOfBait">Type Of Bait</Label>
        <Input
          type="text"
          name="typeOfBait"
          id="typeOfBait"
          placeholder="What's The Secret There Partner?"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Remember To...</Label>
        <Input
          type="textarea"
          name="text"
          id="exampleText"
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
      <FormGroup tag="fieldset">
        <FormGroup check>
          <Label check>
            <Input type="radio" name="bankFishing" /> Bank Fishing
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="boatFishing" /> Boat Fishing
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="freshWater" /> FreshWater
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="SaltWater" /> SaltWater
          </Label>
        </FormGroup>
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

export default JournalPost;
