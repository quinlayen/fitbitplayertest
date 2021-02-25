import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {initializeStore} from 'fluxible-js';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';


Amplify.configure(awsconfig);

initializeStore({
  initialStore:{
    authUser: null
  },
  persist:{
    syncStorage: window.localStorage,
    restore({authUser}){
      return {authUser};
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);