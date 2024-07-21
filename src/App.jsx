import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/core/routes/Route';
import './App.css'; // Ensure the path to your CSS file is correct


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
