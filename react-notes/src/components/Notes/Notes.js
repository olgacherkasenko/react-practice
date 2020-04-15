import React from 'react';
import './Notes.css';

export const Notes = ({ notes, onRemove }) => (
  <ul className='list-group'>
    {notes.map(note => (
      <li 
        className='list-group-item'
        key={note.id}>
          <div>
            <strong>{note.title}</strong>
            <small>{note.date}</small>
          </div>

          <button type='button' className='close-button' onClick={() => onRemove(note.id)}>
            &times;
          </button>
      </li>
    ))}
  </ul>
)