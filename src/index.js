import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import IsTriangle from './pages/IsTriangle';
import Quiz from './pages/Quiz';
import Areacalculator from './pages/Areacalculator';
import Hypotenuse from './pages/Hypotenuse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="is-triangle" element={<IsTriangle />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="hypotenuse" element={<Hypotenuse />} />
          <Route path="areacalc" element={<Areacalculator />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
