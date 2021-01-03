import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addNewAnecdote = async (content) => {
  const anecdoteObject = { content, votes: 0 };
  const response = await axios.post(baseUrl, anecdoteObject);
  return response.data;
};

const updateAnecdote = async (newObject, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export default { getAll, addNewAnecdote, updateAnecdote };
