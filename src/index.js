import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views';
import configure from './store';
import {Provider} from 'react-redux';
import './index.css';

const store = configure()

ReactDOM.render(
<Provider store={store}>
  <Layout />
</Provider>,
  document.getElementById('root')
);
