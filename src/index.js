import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import SurahPage from './containers/SurahPage';
import ProtectedRoute from './containers/ProtectedRoute';
import SuccessRegister from './containers/SuccessRegister';
import NotFoundPage from './containers/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<ProtectedRoute loginOnly={false}><LoginPage/></ProtectedRoute>}></Route>
        <Route path="register" element={<ProtectedRoute loginOnly={false}><RegisterPage/></ProtectedRoute>}></Route>
        <Route path="detail/:id/:nama" element={<ProtectedRoute><SurahPage></SurahPage></ProtectedRoute>}></Route>
        <Route path="success" element={<SuccessRegister /> } />
        <Route path="*" element={<NotFoundPage /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
