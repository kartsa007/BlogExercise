import React from 'react';
// using ES6 modules
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import './Navigation.css';

const Navigation = ({ user }) => {
  let elem;

  if (user) {
    elem = (
      <Router>
      <nav className="Navigation">
        <ul>
          <li>Kirjautuneena:{user}</li>
          <li><Link to="/editBlog">Uusi blogikirjoitus</Link></li>
        </ul>
      </nav>
    </Router>);
  } else {
    elem = (
      <Router>
      <nav style={{ width: '30%', backgroundColor: 'grey' }}>
        <ul>
          <li><Link to="/signin">Kirjaudu</Link></li>
          <li><Link to="/signup">Luo käyttäjätunnus</Link></li>
        </ul>
      </nav>
      </Router>
    );
  }
  return elem;
};

export default Navigation;
