import './App.css';
import {DataContext} from './DataContext';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './Cart';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <DataContext>
        <NavBar />
        <div className="App">
          <h1>Ismail Store</h1>
          <h2>Best prices for high quality</h2>
        </div>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </DataContext>
    </Router>
  );
}

export default App;

//fun lab :D
/*
1-create a products json data file having 
id , name, description ,price and image
2- create a product list preview all at least 10 
prdouct in a 4 places grid
3-create an add to cart button 
4-create a cart page

*/