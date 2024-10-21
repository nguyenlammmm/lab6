import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Products />}/>
          <Route path='/detail/:id' element={<ProductDetail />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
