import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/notficationReducer';


const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};


const AnecdoteList = () => {
  //sorting states without mutation
  //soring is done in descending order of votes
  const anecdotes = useSelector(state => {
    const sortedAnecdotes = [...state.anecdotes].sort((a, b) => b.votes - a.votes);
    const filterString = state.filter;
    if(filterString === '')
      return sortedAnecdotes;
    else
      return sortedAnecdotes.filter(a => a.content.toLowerCase().includes(filterString.toLowerCase()));

  });

  const dispatch = useDispatch();

  const manageVoting = async (anecdote) => {
    await dispatch(voteAnecdote(anecdote));
    //await???
    dispatch(createNotification(`You voted for ${anecdote.content}`, 5000));
  };

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key = {anecdote.id}
          anecdote = {anecdote}
          handleClick = {() => manageVoting(anecdote)}
        />
      )}
    </div>
  );
};


export default AnecdoteList;