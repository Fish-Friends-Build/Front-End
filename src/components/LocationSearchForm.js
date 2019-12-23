import React from "react";
const handleSubmit = (e) => {
  e.preventDefault();
}


const LocationSearchForm = ({ searchTerm, handleChange }) =>{
    return (
    <section>
        <h3>Search</h3>
        <form onSubmit={handleSubmit} className="location-search-form">
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