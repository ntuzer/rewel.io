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
import About from './about/about';

const App = (store) => {

  return (
    <div>
      <Route path="/" component={Navbar} />
      <Route path="/" component={About} />
    </div>
  );
};
export default App;
