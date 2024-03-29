import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Pages/Register/Register';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles';
import { Login } from './components/Pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
        <Register/>
        {/* <Login /> */}
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
