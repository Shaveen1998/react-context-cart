import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Cart from './component/Cart';
import Home from './component/Home';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/cart" Component={Cart} />
        </Routes>
      </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
