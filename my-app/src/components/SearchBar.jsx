import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {getCity} from '../redux/actions'
import './SearchBar.css'

function SearchBar({found, getCity}) {
  const [city, setCity] = useState("");
  const history = useHistory()

  useEffect(() => {
    if (found === 'repeat') alert('City already exists in your list')
    if (found === 'notFound') alert('City not found')
  }, [found])

  function handleOnChange(e) {
    e.preventDefault()
    setCity(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getCity(city)
    setCity('')
    history.push('/home')
  }

  return (
    <form onSubmit={(e) => {
      handleSubmit(e)}}>
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => handleOnChange(e)}
        className='input'
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