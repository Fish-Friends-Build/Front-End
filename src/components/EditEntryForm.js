import React, { useEffect, useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";

import { JournalEntriesContext } from "../contexts/JournalEntriesContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import style from "styled-components";

const StyleForm = style.form`
width 75%;
margin: 0 auto;
padding: 2%;
border: thin solid #8dba20;
border-radius: 1px;
background: rgba(255, 255, 255, .1);
font-family: 'Abel', sans-serif;
color: #eee
background: rgba(0,0,0,0.7);
`;

const EditEntryForm = props => {
	const { JournalEntriesData, setJournalEntriesData } = useContext(JournalEntriesContext);
	let history = useHistory();

	const [localEntry, setLocalEntry] = useState([]);

	const postId = parseInt(props.match.params.id);

	useEffect(() => {
		for (let i = 0; i < JournalEntriesData.length; i++) {
			if (JournalEntriesData[i].id === parseInt(props.match.params.id)) {
				const { username, ...rest } = JournalEntriesData[i];
				setLocalEntry(rest);
			}
		}
	}, [JournalEntriesData, props.match.params.id]);

	const handleChange = e => {
		setLocalEntry({ ...localEntry, [e.target.name]: e.target.value });
	};

	const handleSubmitPut = () => {
		axiosWithAuth()
			.put(`/journals/${postId}`, localEntry)
			.then(res => {
				console.log("put resolve data", res.data);
			})
			.catch(err => {
				console.log(err.message);
			});
		history.push("/journal-entries");
	};

	const handleDelete = () => {
		axiosWithAuth()
			.delete(`/journals/${postId}`)
			.then(() => {
				alert("Entry has been deleted");
			})
			.catch(err => {
				console.log(err);
			});
		history.push("/journal-entries");
	};

	return (
		<StyleForm>
			<Form
				onChange={handleChange}
				onSubmit={handleSubmitPut}
				style={{
					display: "flex",
					flexFlow: "column wrap",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Form.Field width={5}>
					<input placeholder="Location" name="location" value={localEntry.location} />
				</Form.Field>
				<Form.Field width={5}>
					<input placeholder="Date" name="date" value={localEntry.date} />
				</Form.Field>
				<Form.Field width={5}>
					<input placeholder="Time Of Day" name="timeOfDay" value={localEntry.timeOfDay} />
				</Form.Field>
				<Form.Field width={5}>
					<input placeholder="Notes" name="notes" value={localEntry.notes} />
				</Form.Field>
				<Form.Field width={5}>
					<input placeholder="Number Of Fish Caught" name="numFishCaught" value={localEntry.numFishCaught} />
				</Form.Field>
				<Form.Field width={5}>
					<input placeholder="Fish Type" name="fishType" value={localEntry.fishType} />
				</Form.Field>
				<Form.Field width={5}>
					<input placeholder="Bait" name="bait" value={localEntry.bait} />

					<Button
						style={{
							border: "thin solid #12a0f1",
							background: "#333333",
							fontWeight: "900",
							textAlign: "center",
							color: "#eee",
							margin: "4% auto",
							height: "auto",
							transition: "all 0.15s ease-in-out",
						}}
						type="submit">
						Update
					</Button>
				</Form.Field>
			</Form>
			<Form
				style={{
					display: "flex",
					flexFlow: "column wrap",
					alignItems: "center",
					justifyContent: "center",
					margin: "1%",
				}}>
				<Form.Field>
					<Button onClick={handleDelete} type="delete"
          style={{
            border: "thin solid #f11212",
            background: "#333333",
            fontWeight: "900",
            textAlign: "center",
            color: "#eee",
            margin: "4% auto",
            height: "auto",
            transition: "all 0.15s ease-in-out",
          }}>
						Delete
					</Button>
				</Form.Field>
			</Form>
		</StyleForm>
	);
};

export default EditEntryForm;
