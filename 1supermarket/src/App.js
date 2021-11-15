import Home from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './assets/css/bootstrap.css'
// import './assets/css/font-awesome.css'
import './assets/css/skdslider.css'

import './assets/css/style.css'
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';
import Help from './components/Help';
import Contact from './components/Contact';

// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/faq" element={<Help />} />
      <Route path="/contact" element={<Contact/>} />




      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
