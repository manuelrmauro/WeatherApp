import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {getCity} from '../redux/actions'

function SearchBar({found, getCity}) {
  const [city, setCity] = useState("");

  useEffect(() => {
    if (found === 'repeat') alert('It already exists')
    if (found === 'notFound') alert('Result not found')
  }, [found])

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
    found: state.found
  }
}

export default connect(mapStateToProps,{getCity})(SearchBar)