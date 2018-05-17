import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Refresh
} from 'react-router-dom';
import Navbar from './navbar/navbar';

const App = (store) => {

  return (
    <div>
      <Route path="/" component={Navbar} />
    </div>
  );
};
export default App;
