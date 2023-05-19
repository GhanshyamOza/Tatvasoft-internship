  // import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import {HomePage} from './HomePage';
import {Apple} from './Apple';
import {NotFound} from './NoFound';
// import {globalStyle} from './constants';
import appStyle from './AppStyle.module.css';
// import Logo from './images/logo.svg'

function App() {
  return (
    <BrowserRouter>
      <img src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`} alt="App Logo" />
      <div 
        // style={{
        //   ...globalStyle.navbar
        // }}
        className={appStyle.navbarStyle}
      >
        <Link to='/'>Home</Link>
        <Link to='/apple'>Apple</Link>
        <Link to='/applet'>Applet</Link>
      </div>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/apple' element={<Apple/>}></Route>
        <Route path='*' element={<NotFound/>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
