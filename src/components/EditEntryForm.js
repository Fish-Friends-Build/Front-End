import React, { useEffect, useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';

import { JournalEntriesContext } from '../contexts/JournalEntriesContext';

const EditEntryForm = props => {
  const { JournalEntriesData, setJournalEntriesData } = useContext(
    JournalEntriesContext
  );

  const [localEntry, setLocalEntry] = useState([]);

  useEffect(() => {
    let singleEntry = [];

    for (let i = 0; i < JournalEntriesData.length; i++) {
      if (JournalEntriesData[i].id === props.match.params.id) {
        // console.log(JournalEntriesData[i]);
        singleEntry.push(JournalEntriesData[i]);
      } else {
        return undefined;
      }
    }
    setLocalEntry(singleEntry);
  }, [JournalEntriesData]);

  console.log(localEntry);

  return (
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
};

export default EditEntryForm;
