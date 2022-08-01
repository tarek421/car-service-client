import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import { Routes, Route } from "react-router-dom";
import './main.css';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import Orders from './pages/Dashboard/Orders/Orders';
import AdminRoute from './pages/Dashboard/AdminRoute/AdminRoute';
import Shops from './pages/Shop/Shops/Shops';
import NotFound from './pages/NotFound/NotFound';
import ProdructDetails from './pages/ProductDetails/ProdructDetails';
import ServicesDetail from './pages/ServicesDetail/ServicesDetail';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import AddService from './pages/Dashboard/AddService/AddService';
import Contact from './pages/Contact/Contact/Contact';
import ProductList from './pages/Dashboard/ProductList/ProductList';
import NewsDetails from './pages/NewsDetails/NewsDetails/NewsDetails';
import UserList from './pages/Dashboard/UserList/UserList';
import About from './pages/About/About';
import AddBlog from './pages/Dashboard/AddBlog/AddBlog';
import CheckOut from './pages/CheckOut/CheckOut';

export const userContext = createContext();


function App() {


  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);


  return (
    <AuthProvider>
      <SkeletonTheme baseColor="#eae1e1" highlightColor="#fff">
        <userContext.Provider value={[adult, children, setAdult, setChildren]}>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shops />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="productDetails/:id" element={<ProdructDetails />} />
            <Route path="servicesDetail/:id" element={<ServicesDetail />} />
            <Route path="newsDetail/:id" element={<NewsDetails />} />
            <Route path="newsDetail/" element={<NewsDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="*" exact="true" element={<NotFound />} />


            <Route path="/dashboard" element={<Dashboard />}>

              <Route path="makeAdmin" element={<AdminRoute>
                <MakeAdmin />
              </AdminRoute>} />

              {/* <Route path="addService" element={<AdminRoute>
              <AddService />
            </AdminRoute>} /> */}

              {/* <Route path="addProduct" element={<AdminRoute>
              <AddProduct />
            </AdminRoute>} /> */}

              <Route path="addProduct" element={<AddProduct />} />
              <Route path="addBlog" element={<AddBlog />} />
              <Route path="addService" element={<AddService />} />


              <Route path="productList" element={<ProductList />} />
              <Route path="userList" element={<UserList />} />

              {/* <Route path="orders" element={<Orders />} /> */}

              <Route path="orders" element={<AdminRoute>
                <Orders />
              </AdminRoute>} />

            </Route>

          </Routes>
        </userContext.Provider>
      </SkeletonTheme>
    </AuthProvider>
  );
}

export default App;
