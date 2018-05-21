import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class About extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){



  }

  render(){
    return (
      <div id='about'>
        <div className='about-inner'>
          <div className='about-top'>
            <h1>About Me</h1>
          </div>
          <div className='about-bottom'>
            <div className='about-left'>
              <p>Software developer experienced in React, Rails, JavaScript, HTML5 and CSS. I enjoy creating full stack apps and learning new things. Im a life long learner and in my spare time I like making practical Arduino projects written in C that are useful around the house like a house security system and a self watering garden.</p>
              <br></br>
              <p><a target="_blank" href='https://github.com/ntuzer'>=> GITHUB</a></p>
              <br></br>
              <p><a target="_blank" href='https://linkedin.com/in/rewelgarcia'>=> LinkedIn</a></p>
            </div>
            <div className='about-right'>
              <div className='about-img'>
                <img src='http://res.cloudinary.com/rewelito/image/upload/c_scale,w_600/v1526856301/pics/rgfav.jpg'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default About;
