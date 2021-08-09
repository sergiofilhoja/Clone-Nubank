import React from 'react';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';

import Routes from './src/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
)

export default App;
