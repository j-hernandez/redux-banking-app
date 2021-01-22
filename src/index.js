// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from 'redux';

console.log('Starting up React App');

const defaultState = {
  balance: 0
}

// Increment
const incrementAction = {
  type: 'increment'
}

// Decrement
const decrementAction = {
  type: 'decrement'
}

// Reducer - the function that returns a modified copy of your app state

function account(state = defaultState, action) {
  switch (action.type) {
    case 'increment':
      return {
        balance: state.balance + 1
      }
    case 'decrement':
      return {
        balance: state.balance - 1
      }
    case 'multiply':
      return state;
    default: 
    return state
  }
}

const store = createStore(account);

// We should now have a store that we can use to keep track of our balance

store.subscribe(() => {
  console.log('*** Updated our application state ***')
  const state = store.getState();
  console.log(state);
})

window.store = store;
window.incrementAction = incrementAction;
window.decrementAction = decrementAction;
