import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import NavBar from './components/NavBar';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/details/:idProduct" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/category/:idCategory" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
