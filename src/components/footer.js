import React, { Component } from 'react';
import '../stylesheets/footer.css';


class Footer extends Component {
  
  render() {
    return (
    	<div>
       		<span> {this.props.title} </span>
       	</div>
    );
  }
}

export default Footer;
