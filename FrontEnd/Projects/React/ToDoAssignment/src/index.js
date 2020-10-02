import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
import Root from './components/root.js';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localstorage.js';
import './index.css';


const persistedState = loadState();
let store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
