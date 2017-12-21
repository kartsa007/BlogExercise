import React, { Component } from 'react';
import './App.css';
import { Navigation } from './Components/Navigation'
import { BlogView } from './Components/BlogView'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: 'Blogs',
      button2Text: 'Uusi Blogi'
    }
    this.action = this.action.bind(this)
  }

  action(view, button2Text) {
    this.setState({view, button2Text})
  }

  render() {
    return (
      <div className="BlogExercise">
        <header className="App-header">
            <h1 className="App-title">Tervetuloa Blogi-sivulle</h1>
        </header>
          <div id="container">
              <Navigation action={this.action} button2Text={this.state.button2Text}>

              </Navigation>
              <BlogView action={this.action} view={this.state.view}>

              </BlogView>
          </div>

      </div>
    );
  }
}

export default App;
