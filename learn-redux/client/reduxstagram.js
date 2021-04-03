import React from 'react';
import { render } from 'react-dom';
// Import CSS
import css from './styles/style.styl';
// Import components
import Main from './components/Main';

render(<Main><p>Howdy</p></Main>, document.getElementById('root'));