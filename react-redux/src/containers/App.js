import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import MainView from '../components/MainView';
import * as Actions from '../actions';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Tervetuloa Blogi-sivulle</h1>
    </header>
    <div id="container">
      <Navigation />
      <MainView />
    </div>
  </div>
);


const mapStateToProps = state => ({
  user: state.user,
  view: state.view
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
