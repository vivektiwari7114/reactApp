import React, { Component } from 'react';
import '../stylesheets/header.css';


class Header extends Component {

  constructor() {
  	super();
  	this.state = {name: "This is Header"};
  }
  
  render() {
  	setTimeout(() => {
  		this.setState({name : "Header got changed"});

  	},1000)
    return (
    	<div>
       		<span> {this.state.name}</span>
       	</div>
      
    );
  }
}

export default Header;
