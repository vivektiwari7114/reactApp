import React, { Component } from 'react';
import '../stylesheets/layout.css';
import Header from './header.js';
import Footer from './footer.js';
import App from './app.js';

class Layout extends Component {

  constructor(){
    super();
    this.state = {
      headerTitle: "Welcome To Header",
      footerTitle: " Welcome to Footer"
    };
  }

  changeHeaderTitle(title){
    this.setState({headerTitle: title});
  }
  changeFooterTitle(footTitle){
    this.setState({footerTitle: footTitle});
  }
  
  render() {
    return (
      <div >
      	<Header  changeHeaderTitle = {this.changeHeaderTitle.bind(this)}  title = {this.state.headerTitle}/>
       	<App />
       	<Footer  changeFooterTitle = {this.changeFooterTitle.bind(this)}  title = {this.state.footerTitle} />
      </div>
    );
  }
}

export default Layout;
