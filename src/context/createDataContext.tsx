import React, { useReducer, createContext } from 'react';

//BOILERPLATE CODE TO INITIALIZE CONTEXT API

const createDataContext = (reducer, actions, initialState) => {
  const Context = createContext({...initialState});

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};




export default createDataContext;
