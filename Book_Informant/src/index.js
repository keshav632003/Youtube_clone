import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Booklist from './Components/Booklist/Booklist';
import BookDetails from './Components/BookDetails/BookDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='about' element={<About />}/>
        <Route path='book' element={<Booklist />}/>
        <Route path='/book/:id' element={<BookDetails />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </AppProvider>
);
