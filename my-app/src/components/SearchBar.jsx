import React, { useState } from "react";
import { connect } from "react-redux";
import {getCity} from '../redux/actions'

function SearchBar({cities, getCity}) {
  const [city, setCity] = useState("");

  function handleOnChange(e) {
    e.preventDefault()
    setCity(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getCity(city) 
  }

  return (
    <form onSubmit={(e) => {
      handleSubmit(e)}}>
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => handleOnChange(e)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

function mapStateToProps (state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps,{getCity})(SearchBar)