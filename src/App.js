import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import CartComponent from './component/Cart';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/cart" Component={CartComponent} />
        </Routes>
      </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
