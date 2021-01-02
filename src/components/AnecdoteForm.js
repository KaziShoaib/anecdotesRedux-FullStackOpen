import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/notficationReducer';

import anecdoteService from '../services/anecdotes';


const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newAnecdote = await anecdoteService.addNewAnecdote(content);
    dispatch(createAnecdote(newAnecdote));
    dispatch(createNotification(`You added a new anecdote: ${content}`));
    setTimeout(() => {
      dispatch(createNotification(''));
    }, 5000);
  };

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};


export default AnecdoteForm;