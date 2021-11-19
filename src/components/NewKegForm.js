import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewKegForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcContent: event.target.alcContent,
      quantity: 124,
      id: v4()});
  }


  return(
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input 
          type='text'
          name='name' 
          placeholder='Keg Name'/>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' />
        <input
          type='text'
          name='price'
          placeholder='Keg Price' />
        <input 
          type='text'
          name='alcContent'
          placeholder='Alcohol Content' />
        <button type='submit'>Submit new keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;