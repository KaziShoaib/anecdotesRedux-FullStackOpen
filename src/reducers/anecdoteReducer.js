const anecdoteReducer = (state = [], action) => {
  switch(action.type){
    case 'INIT_ANECDOTES':
      return action.data;
    case 'VOTE':{
      const id = action.data.id;
      const anecdoteToVote = state.find(a => a.id === id);
      const votedAnectode = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      };
      return state.map(a => a.id === id ? votedAnectode : a);
    }
    case 'NEW_ANECDOTE':
      return [ ...state, action.data];
    default:
      return state;
  }
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  };
};


export const createAnecdote = (anecdoteObject) => {
  return {
    type: 'NEW_ANECDOTE',
    data : anecdoteObject
  };
};

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  };
};

export default anecdoteReducer;