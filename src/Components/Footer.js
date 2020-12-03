import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data, this.props.ovi){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
      var networksOvi= this.props.ovi.flowerlist.map(function(ovi){
        return <li key={ovi.name}><a href={"https://www.google.com/"}>{ovi.name} </a></li>
      })
      
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

          
          

           <ul className="copyright">
              <li>&copy; Copyright 2017 Nordic Giant</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

        </div>
        
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
     <ul id="nav" classname="row banner">
              {networksOvi}
          </ul>
  </footer>
    );
  }
}

export default Footer;
