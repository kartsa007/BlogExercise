import React from 'react';
// using ES6 modules
import {
  Link,
} from 'react-router-dom';

import './Navigation.css';

const Navigation = ({ user }) => {
  let elem;

  if (user) {
    elem = (
      <nav className="Navigation">
        <ul>
          <li>Kirjautuneena:{user}</li>
          <li><Link to="/editBlog">Uusi blogikirjoitus</Link></li>
        </ul>
      </nav>
    );
  } else {
    elem = (
      <nav style={{ width: '30%', backgroundColor: 'grey' }}>
        <ul>
          <li><Link to="/signin">Kirjaudu</Link></li>
          <li><Link to="/signup">Luo käyttäjätunnus</Link></li>
        </ul>
      </nav>
    );
  }
  return elem;
};

export default Navigation;
