import React, { createContext } from 'react';

const initialState = {
  numFishCaught: []
};

export const Store = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, numFishCaught: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  return (
    <Store.Provider value={(state, dispatch)}>{props.children}</Store.Provider>
  );
}
