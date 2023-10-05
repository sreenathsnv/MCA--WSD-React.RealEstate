import React, { useState } from 'react';
import styles from './PropertySearch.css';

function PropertySearch({ onSearch }) {
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
  });

  const handleSearch = () => {
    onSearch(searchCriteria);
  };

  return (
    <div className={styles.propertySearch}>
      <h2>Property Search</h2>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          placeholder="Location"
          className = 'form-control'
          value={searchCriteria.location}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, location: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="text"
          id="priceRange"
          placeholder="Price Range"
          className = 'form-control'
          value={searchCriteria.priceRange}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, priceRange: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="propertyType">Property Type:</label>
        <input
          type="text"
          id="propertyType"
          placeholder="Property Type"
          className = 'form-control'
          value={searchCriteria.propertyType}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, propertyType: e.target.value })}
        />
      </div>
      <button className='btn btn-primary' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default PropertySearch;
