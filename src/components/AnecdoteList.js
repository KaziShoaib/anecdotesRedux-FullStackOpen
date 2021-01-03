import React from 'react';
import { connect } from 'react-redux';
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


const AnecdoteList = (props) => {


  const manageVoting = async (anecdote) => {
    await props.voteAnecdote(anecdote);
    //await???
    props.createNotification(`You voted for ${anecdote.content}`, 5000);
  };

  return (
    <div>
      {props.anecdotes.map(anecdote =>
        <Anecdote
          key = {anecdote.id}
          anecdote = {anecdote}
          handleClick = {() => manageVoting(anecdote)}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const filterString = state.filter;
  const sortedAnecdotes = [...state.anecdotes].sort((a, b) => b.votes - a.votes);
  if(filterString === '')
    return {
      anecdotes: sortedAnecdotes
    };
  else
    return {
      anecdotes: sortedAnecdotes.filter(a => a.content.toLowerCase().includes(filterString.toLowerCase()))
    };
};


const mapDispatchToProps = { voteAnecdote, createNotification };

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

export default ConnectedAnecdoteList;