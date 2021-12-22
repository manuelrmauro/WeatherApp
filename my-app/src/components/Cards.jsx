import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import { connect } from 'react-redux';
import {deleteCity} from '../redux/actions'

function Cards({cities, deleteCity}) {
  function handleOnClose(id) {
    deleteCity(id)
  }
   
  return (
    <div className='cards'>
      {cities.length?cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => handleOnClose(c.id)} 
        />):<p className='text'>Search your cities...</p>}
    </div> 
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps,{deleteCity})(Cards)