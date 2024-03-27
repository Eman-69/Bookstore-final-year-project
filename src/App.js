import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Amplify
import {Amplify} from "aws-amplify";

// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Admin from './pages/Admin';
import About from './pages/About';
import './index.css';
// Components
import Header from "./components/Header"
import Footer from './components/Footer';

// Amplify Configurations
import amplifyConfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyConfig);


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route exact path="books" element={<Books />}/>
        <Route path="books/:id" element={<BookDetails/>}/>
        <Route path="admin" element={<Admin />}/>
        <Route path="*"element={ <Error />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
