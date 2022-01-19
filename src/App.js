import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <div className="App">
        {/* <img className="product-img" src={'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'} alt=""/> */}
        {/* <Router>
          <Routes>
            <Route path='/' exact render={() => 
              <HomePage/>
            }/>
            <Route path='/OrderPage' exact render={() => 
              <OrderPage/>
            }/>
        </Routes>
      </Router> */}
      <HomePage/>
    </div>
  );
}

export default App;



