import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
   <Routes> {/* Use <Routes> instead of <BrowserRouter> */}
      <Route path="/" element={<Login />} /> {/* Use the 'element' prop */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Use the 'element' prop */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
