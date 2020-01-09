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
  background: rgba(255, 255, 255, .1);
  font-family: 'Abel', sans-serif;
  color: #eeeeee
  background: rgba(0,0,0,0.7);
`;

    const StyleInput = style.input`
    border: 1px solid #a9a9a9;
    border-radius: 3px;
    padding: 10px;
    margin: 5px;
    width: 150px;
    box-sizing: border-box;
    margin-top: 1%;
  `;
  
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