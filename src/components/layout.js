import React, { Component } from 'react';
import '../stylesheets/layout.css';
import Header from './header.js';
import Footer from './footer.js';
import App from './app.js';

class Layout extends Component {

  constructor(){
    super();
    this.state = {
      title: "Welcome To Header"
    };
  }

  changeTitle(title){
    this.setState({title});
  }

  

  render() {
    return (
      <div >
      	<Header  changeTitle = {this.changeTitle.bind(this)}  title = {this.state.title}/>
       	<App />
       	<Footer />
      </div>
    );
  }
}

export default Layout;
