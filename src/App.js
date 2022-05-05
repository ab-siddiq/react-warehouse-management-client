import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import Home from './components/Pages/Home/Home';

function App() {
  return (
   <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
  
}

export default App;
