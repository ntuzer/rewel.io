import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Refresh
} from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';

const App = (store) => {

  return (
    <div>
      <Route path="/" component={NavbarContainer} />
    </div>
  );
};
export default App;
