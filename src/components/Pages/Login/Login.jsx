import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './Login.css';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../Register/Register.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const Login = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    
    const onFormSubmit = () => {
        alert("Form Submitted!")
    }

    const initialValues = {
        name: "",
        email: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Please enter a Valid Email Address").required("Email is Required"),
        password: Yup.string().min(8, "Minimum 8 Character are required").max(15, "Maximum 15 Character are allowed").required("Password is Required")
      });
      
    return (
        <>
            <div className="register-container">
                <div className="register-title-container">
                    <div role="presentation" onClick={handleClick} className="bread-crumb">
                        <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: 32}}>
                            <Link href="/" id="bread-crumb-nav">
                                Home
                            </Link>
                            <Typography style={{color: "#f14d54", fontSize: 18}}>Login</Typography>
                        </Breadcrumbs>
                    </div>
                    <div className="title">
                        Login or Create an Account
                    </div>
                    <div className="line"></div>
                </div>

                
                <div className="flex-container">
                    <div className="flex-item-left">
                        <div className="sub-title-login">
                            New Customer
                        </div>
                        <div className="instruction-login">Registration is free and easy.</div>
                        <div className="instruction-list">
                            <ul>
                                <li>Faster checkout</li>
                                <li>Save multiple shipping addresses</li>
                                <li>View and track orders and more</li>
                            </ul>
                        </div>
                        <div className="create-account-button">
                            <Button variant="contained" sx={{borderRadius: 0, textTransform: "capitalize", fontWeight: 600, padding: "6px 30px", fontSize: 19}} type="submit" size="big" id="create-account">Create An Account  </Button>
                        </div>
                    </div>

                    <div className="flex-item-right">
                        <div className="sub-title-login">
                            Registered Customers
                        </div>
                        <div className="instruction-login">If you have an account with us, please log in.</div>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
                        {({value, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
                        <div>
                            <label htmlFor="email">Email Address *</label><br />
                                <TextField type="email" id='email' name="email" size="small" style={{width: "95%", marginTop: 15, marginBottom: 10}} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.email && errors.email && <span style={{color: "red", fontSize: 14, paddingLeft: 1, fontWeight: 100}}>{errors.email}</span>}
                                <div style={{marginTop: 10}}>
                                    <label htmlFor="password" style={{marginTop: 10}}>Password *</label><br />
                                        <TextField type="text" id='password' name="password" style={{width: "95%", marginTop: 15, marginBottom: 10}} size="small" onChange={handleChange} onBlur={handleBlur}/>
                                        {touched.password && errors.password && <span style={{color: "red", fontSize: 14, paddingLeft: 1, fontWeight: 100}}>{errors.password}</span>}
                                </div>
                                <div className="login-buttton">
                                    <Button variant="contained" sx={{borderRadius: 0, textTransform: "capitalize", fontWeight: 600, marginTop: 2, padding: "6px 30px", fontSize: 19}} type="submit" size="big" id="login-button">Login</Button>
                                </div>
                        </div>
                        )}
                        </Formik>
                    </div>                      
                </div>
            </div>
        </>
    )
}