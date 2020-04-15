import React, { useContext, useEffect } from 'react';
import { Form } from '../../components/Form/Form';
import { Notes } from '../../components/Notes/Notes';
import { FirebaseContext } from '../../context/firebase/firebaseContext';
import { Spinner } from '../../components/Spinner/Spinner';

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Form/>

      <hr/>

      {loading 
        ? <Spinner/> 
        : <Notes notes={notes} onRemove={removeNote} /> 
      }

    </>
  );
}