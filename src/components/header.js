import React, { Component } from 'react';
import '../stylesheets/header.css';


class Header extends Component {

  changeHeader(e){
    const newTitle = e.target.value;
    this.props.changeHeaderTitle(newTitle);
  }

  render() {
    return (
    	<div>
       		<div> {this.props.title}</div>
          <input value = {this.props.title} onChange = {this.changeHeader.bind(this)}/>
       	</div>
      
    );
  }
}

export default Header;
