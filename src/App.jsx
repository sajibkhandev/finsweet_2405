import React from 'react'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import FaqPages from './pages/FaqPages';
import Priciing from './pages/Priciing';
import Blog from './pages/Blog';
import Feature from './pages/Feature';


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}> </Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/faq" element={<FaqPages />}></Route>
    <Route path="/pricing" element={<Priciing />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/feature" element={<Feature />}></Route>
    </>
  )
);

const App = () => {
  return (
    
    <RouterProvider router={router} />

    
    
  )
}

export default App