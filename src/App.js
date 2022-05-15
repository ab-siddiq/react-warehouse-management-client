import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import Home from './components/Pages/Home/Home';
import ManageProduct from './components/Pages/ManageProduct/ManageProduct';
import UpdateStock from './components/Pages/ManageProduct/UpdateStock/UpdateStock';
import Inventory from './components/Pages/ManageProduct/Inventory/Inventory';
import Blogs from './components/Pages/Blogs/Blogs';
import NotFound from './components/Pages/NotFound/NotFound';
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';

function App() {
  return (
   <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
      <Route path='/manageProduct' element={<ManageProduct></ManageProduct>}></Route>
      <Route path='/inventory/:inventoryId' element={<Inventory></Inventory>}></Route>
      <Route path='/update/stock/:stockId' element={<UpdateStock></UpdateStock>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
  
}

export default App;
