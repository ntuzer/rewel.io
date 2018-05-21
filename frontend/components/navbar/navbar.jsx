import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class Navbar extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this).addEventListener('scroll', event => {
      console.log(event);

    });



  }

  render(){
    let link =
    'http://cdn.shopify.com/s/files/1/2114/5389/products/wood_backdrop_medium_backdrop_boards_medium_backdrops_grande.jpg?v=1521740229';
    let link2 =
    'http://biteinto.info/wp-content/uploads/2016/02/light-wood-grain-background-and-keywords-wooden-texture-surface-backdrop-hard-wood-grain-smooth-planed-19.jpg';
    let link3 =
    'https://img.etsystatic.com/il/27099a/1393512158/il_fullxfull.1393512158_p77c.jpg?version=0';
    let beach =
    'http://blog.tours4fun.com/wp-content/uploads/2018/03/shimizu.jpg';
    let rest =
    'http://www.pngall.com/wp-content/uploads/2016/03/Macaw-High-Quality-PNG.png';
    let spacedrop =
    'https://upload.wikimedia.org/wikipedia/commons/1/10/MA_illustration_2016_17_%2824523577579%29.jpg';
    const spaceship = ''



    return (
      <div className="navbar">
        <img className="background" src={spacedrop}></img>
        <div>
          <h1 id='nombre'>ReweL</h1>
        </div>
      </div>
    );
  }

}





// <img src={spacedrop}></img>
// <img src={beach}></img>
export default Navbar;
