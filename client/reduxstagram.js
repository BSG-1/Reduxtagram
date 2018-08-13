//import react
import React from 'react';
import { render } from 'react-dom';


//import CSS
import css from './styles/style.styl';

//import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router
import { Router, Route, IndexRoute, browserHistory }

render(<Main />, document.getElementById('root'));