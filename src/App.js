import React from 'react'
import './App.css';
import './styles.css';
import Page1 from './page1'
import Page2 from './page2'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>

      <div className="links">
        <Link to="/page1">Página 1</Link>
        <Link to="/page2">Página 2</Link>
      </div>

        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
