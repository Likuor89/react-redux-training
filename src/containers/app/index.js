import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import PortfList from '../portfolios'

const App = () => (
    <div className="wrap">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About </Link>
        <Link to="/portfolios">Portfolios</Link>
        
      </header>
      
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/portfolios" component={PortfList} />
      </main>
    </div>
)

export default App;