import React from "react";


const LocationSearchForm = ({ searchTerm, handleChange }) =>{
    return (
    <section>
        <h3>Search By Fish Type</h3>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </section>
    );
  }

  export default LocationSearchForm