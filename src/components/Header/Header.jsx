import Logo from '../../assets/Images/logo.png';
import './Header.css';
// import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="top-header">  
                </div>
                
                <div className="bottom-header">
                    <div className="logo-wrapper">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="nav-wrapper">
                        <div className="nav">
                            <a href="" id="login">Login</a> | 
                            <a href="" id="register">Register</a>
                        </div>
                        <div className="cart">
                            <ShoppingCartIcon style={{color: "#f14d54"}}/>
                            <p style={{fontWeight: 500}}><span style={{color: "#f14d54"}}>0</span> Cart</p>
                        </div>
                    </div>
            </div>

            <div className="search-bar">
                <div>
                    <TextField id="search-bar-input" placeholder="What are you looking for?" />
                </div>
                <div>
                    <Button variant="contained" id="search-button"><SearchIcon></SearchIcon>Search</Button>                        </div>
                </div>
            </div>
        </>
    )
}
