import React, { Component } from 'react';
import '../stylesheets/header.css';


class Header extends Component {

  handleChange(e){
    const newTitle = e.target.value;
    this.props.changeTitle(newTitle);
  }

  render() {
    return (
    	<div>
       		<span> {this.props.title}</span>
          <input onChange = {this.handleChange.bind(this)}/>
       	</div>
      
    );
  }
}

export default Header;
