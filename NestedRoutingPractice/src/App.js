
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NotFound from './component/NotFound';
import Products from './component/Products';
import { Routes,Route } from 'react-router-dom';
import Kids from './component/Kids';
import Men from './component/Men';
import Women from './component/Women';
import Categories from './component/Categories';
import Product from './component/Product';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/product/:id' element={<Product/>}></Route>
     <Route path='/categories' element={<Categories/>}>
        <Route index element={<Kids/>}></Route>
        <Route path='kids' element={<Kids/>}></Route>
        <Route path='women' element={<Women/>}></Route>
        <Route path='men' element={<Men/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
