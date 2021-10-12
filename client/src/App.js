import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/products' component={Products}/>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
