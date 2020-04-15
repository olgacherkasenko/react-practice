import React from 'react';
import './Notes.css';

export const Notes = ({ notes }) => {
  return (
    <>
      <ul className='list-group'>
        {notes.map(note => (
          <li 
            className='list-group-item'
            key={note.id}>
              <div>
                <strong>{note.title}</strong>
                <small>{new Date().toLocaleDateString()}</small>
              </div>

              <button type='button' className='close-button'>
                &times;
              </button>
          </li>
        ))}
      </ul>
    </>
  );
}