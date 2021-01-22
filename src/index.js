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

const ACTION_DEPOSIT = 'deposti';
const ACTION_WITHDRAW = 'withdarw';

const defaultState = {
  checking: 100,
  savings: 100,
  retirement: 100,
  emergency: 100
}

// Deposit
function createDeposit(account, amount) {
  return {
    type: ACTION_DEPOSIT,
    payload: {
      account: account,
      amount: amount
    }
  }
}

// Withdrawal
function createWithdrawal(account, amount) {
  return {
    type: ACTION_WITHDRAW,
    payload: {
      account,
      amount
    }
  }
}

// Reducer - the function that returns a modified copy of your app state
function account(state = defaultState, action) {
  // access to action.type
  // access to action.payload
  switch (action.type) {
    case ACTION_DEPOSIT:
      return {
        ...state,
        [action.payload.account]: state[action.payload.account] || 0 + action.payload.amount
      }
    case ACTION_WITHDRAW:
      return {
        ...state,
        [action.payload.account]: state[action.payload.account] || 0 - action.payload.amount
      }
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
window.createDeposit = createDeposit;
window.createWithdrawal = createWithdrawal;
