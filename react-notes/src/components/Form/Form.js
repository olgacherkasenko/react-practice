import React, { useState, useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { FirebaseContext } from '../../context/firebase/firebaseContext';
import './Form.css'; 

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext)
  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Note was created', 'success');
      }).catch(() => {
        alert.show('Something went wrong', 'danger');
      });
      
      setValue('');
    } else {
      alert.show('Enter note title');
    }
    
  }
  return (
    <form onSubmit={submitHandler} className='form'>
      <div className='form-group'>
        <input 
          type='text' 
          className='form-control' 
          placeholder='Enter your note'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}