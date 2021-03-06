import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //
  //   // Clean up after ourselves so we don't accidentally use the
  //   // global currentUser instead of the one in the store
  //   delete window.currentUser;
  //
  // } else {
    store = configureStore();
  // }


  // window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});
