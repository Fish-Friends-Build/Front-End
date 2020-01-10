import React from "react";
import style from 'styled-components';

const StyleForm = style.form`
display: flex;
align-items: center;
flex-flow: column;
width: 25%;
margin: 0 auto;
border: thin solid #8dba20;
border-radius: 1px;
font-family: 'Abel', sans-serif;
color: #eee
background: rgba(0,0,0,0.7);
`;

  const StyleInput = style.input`
  border: 1px solid #a9a9a9;
  border-radius: 4%;
  padding: 1%;
  margin: 2%;
  width: 40%;
  box-sizing: border-box;
  margin-top: 1%;
`
  
const handleSubmit = (e) => {
  e.preventDefault();
}


const LocationSearchForm = ({ searchTerm, handleChange }) =>{
 
    return (
    <section>
        <StyleForm onSubmit={handleSubmit} className="location-search-form">
          <StyleInput
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </StyleForm>
      </section>
    );
  }

  export default LocationSearchForm