
import * as React from 'react';

import './App.css';

import logo from './logo.svg';

import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Comments from './components/Comments'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';






class App extends React.Component {

  public render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Grid container={true} spacing={40} style={{ padding: 20 }}>
        <Grid item={true} xs={12}>
          <Paper style={{ padding: 20 }}>
           <Comments name={'Hello World'}/>
          </Paper>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
