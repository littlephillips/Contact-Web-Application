import React, { useState } from 'react';
import {Link } from 'react-router-dom';

import {
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledWrapper,
  StyledContainer,
} from './Form.styled';

const Form = () => {
  const [ispending, setIsPending] = useState(false);
  const [state, setState] = useState({
    phone: '',
    email: '',
    lastName: '',
    firstName: '',
  });

  function onInputChange(event) {
    event.preventDefault();
    event.stopPropagation();

    const { value, name } = event.currentTarget;

    setState({
      ...state,
      [name]: value,
    });
  }

  //handleSubmit

let handleSubmit = async (e) => {
  e.preventDefault();
  e.currentTarget.reset();
  setIsPending(true)
  try {
    let res = await fetch('https://my-contact-api.herokuapp.com/contacts', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: state.id,
      firstName: state.firstName,
      lastName: state.lastName,
      phone: state.phone,
      email: state.email,
    }),
    });
    let resJson = await res.json();
    setIsPending(false)
    if(resJson.status === 200) {
      setState((state) => [resJson, ...state]);
    } else {
      console.log("some error occured")
    }
  } catch(err) {
    console.log(err)
  }
};



  return (
    <StyledContainer>
      <form action='/path_to_post' onSubmit={ handleSubmit } >
        <StyledWrapper>
          <div>
            <StyledLabel htmlFor='firstName'>First Name</StyledLabel>
          </div>
          <div>
            <StyledInput
              type='text'
              id='firstName'
              name='firstName'
              required= 'required'
              placeholder='Pablo'
              value={state.firstName}
              onChange={onInputChange}
            />
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div>
            <StyledLabel htmlFor='lastName'>Last Name</StyledLabel>
          </div>
          <div>
            <StyledInput
              type='text'
              id='lastName'
              name='lastName'
              required= 'required'
              placeholder='Escobar'
              value={state.lastName}
              onChange={onInputChange}
            />
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div>
            <StyledLabel htmlFor='phone'>Phone</StyledLabel>
          </div>
          <div>
            <StyledInput
              id='phone'
              type='text'
              name='phone'
              required= 'required'
              value={state.phone}
              onChange={onInputChange}
              placeholder='+254712345678'
            />
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div>
            <StyledLabel htmlFor='email'>Email</StyledLabel>
          </div>
          <div>
            <StyledInput
              id='email'
              type='text'
              name='email'
              required= 'required'
              value={state.email}
              onChange={onInputChange}
              placeholder='example@domain.com'
            />
          </div>
        </StyledWrapper>
        {!ispending && <StyledButton type='submit'>Submit</StyledButton>}
        {ispending && <StyledButton disabled type='submit'>adding...</StyledButton>}

        <Link to={'/list'}>
        <button className='styledbutton' >View Contacts</button>
        </Link>
      </form>
    </StyledContainer>

  );
};

export default Form;
