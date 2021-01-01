import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';


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
  const anecdotes = useSelector(state => [...state].sort((a, b) => b.votes - a.votes));
  const dispatch = useDispatch();
  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key = {anecdote.id}
          anecdote = {anecdote}
          handleClick = {() => dispatch(voteAnecdote(anecdote.id))}
        />
      )}
    </div>
  );
};


export default AnecdoteList;