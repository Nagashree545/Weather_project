
import React from 'react'; // Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import Dashboard from '../src/Components/Dashboard'; // Adjust the path as per your project structure

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
