import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const EditEntryForm = () => (
  <Form>
    <Form.Field>
      <input placeholder="Location" />
    </Form.Field>
    <Form.Field>
      <input placeholder="Date" />
    </Form.Field>
    <Form.Field>
      <input placeholder="Time Of Day" />
    </Form.Field>
    <Form.Field>
      <input placeholder="Notes" />
    </Form.Field>
    <Form.Field>
      <input placeholder="Number Of Fish Caught" />
    </Form.Field>
    <Form.Field>
      <input placeholder="Fish Type" />
    </Form.Field>
    <Form.Field>
      <input placeholder="Bait" />
    </Form.Field>
    <Button type="submit">Update</Button>
    <Button type="delete">Delete</Button>
  </Form>
);

export default EditEntryForm;
