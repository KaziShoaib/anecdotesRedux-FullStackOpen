const filterReducer = (state='', action) => {
  switch(action.type){
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};


export const changeFilter = (filterString) => {
  return {
    type: 'SET_FILTER',
    filter: filterString
  };
};


export default filterReducer;