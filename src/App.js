import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Header";
import './assets/css/joeblog.css';
import Product from "./component/Product";
import Category from "./component/Category";
import Users from "./component/Users";
import Single from "./component/Single";
import 'bootstrap/dist/css/bootstrap.min.css';
import Limit from "./component/Limit";
import Sort from "./component/Sort";
import AdminProduct from "./component/Admin/Product";
import Practice from "./component/Practice";


function App() {
    return (
      <Router>
        <Header />       
        <main>
          <Routes>
          <Route path="/users" element={<Users />} /> 
          <Route path="/product" element={<Product />} />  
          <Route path="/category" element={<Category />} /> 
          <Route path="/single" element={<Single />} />
          <Route path="/limit" element={<Limit />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/admin/product" element={<AdminProduct />} />
          <Route path="/practice" element={<Practice />} />          

          </Routes>
        </main>     
      </Router>
    );
  }

export default App;
