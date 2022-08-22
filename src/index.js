import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Center, Heading } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path="*" element={<Center height={'100vh'}>
            <Heading>URL Does Not Exist</Heading>
          </Center>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
