import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Link to="/gallery_machine"> Go to Gallery Machine </Link> <br></br>
        </div>
        <Routes>
          <Route path="/entrance" element={<Entrance />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
