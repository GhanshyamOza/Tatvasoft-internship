import Logo from '../../assets/Images/logo.png';
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="logo-wrapper">
                    <img src={Logo} alt="" />
                </div>
                <div className="rights">
                    © 2015 Tatvasoft.com. All rights reserved.
                </div>
            </div>
        </>
    )
}