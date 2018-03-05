import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return (
      <h1>HOLA REWEL.IO</h1>
    );
  }
}

export default withRouter(Navbar);
