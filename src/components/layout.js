import React, { Component } from 'react';
import '../stylesheets/layout.css';
import Header from './header.js';
import Footer from './footer.js';
import App from './app.js';

class Layout extends Component {
  
  render() {
    return (
      <div >
      	<Header />
       	<App />
       	<Footer title= {"Welcome to ABC..."} />
       	<Footer title= {"Welcome to XYZ.."} />
      </div>
    );
  }
}

export default Layout;
