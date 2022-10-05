import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_LOCAL_DATA': {
      return {...state, localData: action.payload };
    }
    default:
      throw new Error('unhandled action');
  }
};


const saveLocalData = (dispatch) => {
  return async (data: []) => {
    await dispatch({ type: 'SAVE_LOCAL_DATA', payload: data });
  };
};


export const { Provider, Context } = createDataContext(
    reducer, 
    { saveLocalData }, 
    { localData: [] }
  );
