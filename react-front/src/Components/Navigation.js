import React, { Component } from 'react'

export class Navigation extends Component {
 render() {
    if (this.props.view === 'SignIn' ||
    this.props.view == 'SignUp') {
      return(<div></div>)
    }
    console.log(this.props)
    if (this.props.user) {
      return (
        <nav style={{width: '30%', backgroundColor: 'grey'}}>
          <div>
            Kirjautuneena: {this.props.user.name}
          </div>
          <div>
            <button onClick={() => {
              this.props.actions.editBlog()
            }}>
              Uusi blogikirjoitus
            </button>
          </div>
        </nav>
      )
    } else {
      return (
        <nav style={{width: '30%', backgroundColor: 'grey'}}>
          <div>
            <button onClick={() => {
              this.props.actions.signIn()
            }}>Kirjaudu
            </button>
            <div>
              <button onClick={() => {
              this.props.actions.signUp()
             }}>Luo käyttäjätunnus
              </button>
            </div>
          </div>
        </nav>
      )
   }
  }
}
