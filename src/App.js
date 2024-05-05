import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';
import UserDetail from './components/userDetail/UserDetail';
import ApiExample from './components/api/ApiExample';
import ContextAPI from './components/api/ContextAPI';

function App() {

  return (
      <Router >
        <div>
        {/* Navigation component */}
        <Header />
        {/* Defining Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<UserDetail />} />

         {/* Not found page when route is not matched */}
         <Route path="*" element={<NotFound />} />
         <Route path="/users" element={ <ApiExample/>} />
         <Route path="/context" element={<ContextAPI />} />        
        </Routes>
        </div>
      </Router>

  )

}

export default App;

