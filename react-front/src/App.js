import React, { Component } from 'react';
import './App.css';
import { Navigation } from './Components/Navigation'
import { MainView } from './Components/MainView'
import { Storage } from './Components/Storage'
import { queryBlogs } from './Components/Query'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: 'Main',
    }
    this.action = this.action.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signedIn = this.signedIn.bind(this)
    this.addBlog = this.addBlog.bind(this)
    this.editBlog = this.editBlog.bind(this)
    this.actions = {
      signIn: this.signIn,
      signUp: this.signIn,
      signedIn: this.signedIn,
      editBlog: this.editBlog,
      addBlog: this.addBlog
    }
  }

  okBlogs(data) {
    if (data) {
      Storage.blogs = data
    }
    this.setState(this.state)
  }       

  componentDidMount() {
    Storage.blogs = []
    queryBlogs((data) => this.okBlogs(data))
  }

  action(state) {
    this.setState(state)
  }

  signIn() {
    this.setState({view: 'SignIn'})
  }

  signedIn(user) {
    this.user = user
    Storage.user = user
    this.setState({view: 'Main'})
  }

  addBlog() {
    this.setState({view: 'Main'})
  }

  editBlog() {
    this.setState({view: 'Edit'})
  }
  
  render() {
    return (
      <div className="BlogExercise">
        <header className="App-header">
            <h1 className="App-title">Tervetuloa Blogi-sivulle</h1>
        </header>
          <div id="container">
              <Navigation actions={this.actions}
              user={this.user} 
              view={this.state.view}>
              </Navigation>
              <MainView actions={this.actions} view={this.state.view}>
              </MainView>
          </div>

      </div>
    );
  }
}

export default App;
