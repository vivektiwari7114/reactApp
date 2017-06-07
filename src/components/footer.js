import React, { Component } from 'react';
import '../stylesheets/footer.css';


class Footer extends Component {
  changeFooter(e){
  	const newTitle = e.target.value;
    this.props.changeFooterTitle(newTitle);
  }
  render() {
    return (
    	<div>
       		<div> {this.props.title}</div>
       		<input value = {this.props.title} onChange = {this.changeFooter.bind(this) } />
       	</div>
    );
  }
}

export default Footer;
