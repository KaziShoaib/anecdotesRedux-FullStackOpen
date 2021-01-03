import anecdoteService from '../services/anecdotes';

const anecdoteReducer = (state = [], action) => {
  switch(action.type){
    case 'INIT_ANECDOTES':
      return action.data;
    case 'VOTE':{
      const updatedAnecdote = action.data;
      return state.map(a => a.id === updatedAnecdote.id ? updatedAnecdote : a);
    }
    case 'NEW_ANECDOTE':
      return [ ...state, action.data];
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    });
  };
};


export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.addNewAnecdote(content);
    dispatch({
      type:'NEW_ANECDOTE',
      data: newAnecdote
    });
  };
};

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = { ...anecdote, votes:anecdote.votes+1 };
    const updatedAnecdote = await anecdoteService.updateAnecdote(changedAnecdote, anecdote.id);
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    });
  };
};

export default anecdoteReducer;