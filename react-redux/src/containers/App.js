import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import MainView from '../components/MainView';
import * as Actions from '../actions';

const App = ({ user, actions, view }) => (
  <div className="BlogExercise">
    <header className="App-header">
      <h1 className="App-title">Tervetuloa Blogi-sivulle</h1>
    </header>
    <div id="container">
      <Navigation
        actions={actions}
        user={user}
        view={view}
      />
      <MainView
        actions={actions}
        view={view}
      />
    </div>
  </div>
);


App.propTypes = {
  user: PropTypes.string,
  view: PropTypes.string,
  actions: PropTypes.shape({
    addBlog: PropTypes.func.isRequired,
  }).isRequired,
};
App.defaultProps = {
  user: undefined,
  view: 'Blogs',
};

const mapStateToProps = state => ({
  user: state.user,
  view: state.view,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
