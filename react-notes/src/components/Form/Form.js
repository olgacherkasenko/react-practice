import React from 'react';
import './Form.css';

export const Form = () => {

  return (
    <form>
      <div className='form-group'>
        <input 
          type='text' 
          className='form-control' 
          placeholder='Enter your note'
        />
      </div>
    </form>
  );
}