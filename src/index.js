import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import Header from './components/header';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';


ReactDOM.render(
	<Layout /> , document.getElementById('root')
	);


registerServiceWorker();
