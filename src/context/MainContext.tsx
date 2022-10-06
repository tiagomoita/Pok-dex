import createDataContext from './createDataContext';


//Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_LOCAL_DATA': {
      return {...state, localData: action.payload };
    }
    case 'SAVE_CURRENT_PAGE': {
      return {...state, page: action.payload };
    }
    default:
      throw new Error('unhandled action');
  }
};


//Methods to be dispatch

const saveLocalData = (dispatch) => {
  return async (data: []) => {
    await dispatch({ type: 'SAVE_LOCAL_DATA', payload: data });
  };
};

const saveCurrentPage = (dispatch) => {
  return async (currentPage) => {
    await dispatch({ type: 'SAVE_CURRENT_PAGE', payload: currentPage });
  };
};

//export reducer, methods, and set state with default Values

export const { Provider, Context } = createDataContext(
    reducer, 
    { saveLocalData, saveCurrentPage }, 
    { localData: [], page: 1 }
  );
