import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './Register.css';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const Register = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const handleChange = (event) => {
        
    };

    const onFormSubmit = (values) => {
        console.log("name and email: ", values);
    };
    
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "Minimum 3 Character are required").required("First Name is Required"),
        lastName: Yup.string().min(3, "Minimum 3 Character are required").required("Last Name is Required"),
        email: Yup.string().email("Please enter a Valid Email Address").required("Email is Required"),
        password: Yup.string().min(8, "Minimum 8 Character are required").max(15, "Maximum 15 Character are allowed").required("Password is Required"),
        confirmPassword: Yup.string().min(8, "Minimum 8 Character are required").max(15, "Maximum 15 Character are allowed").required("Confirm Password is Required")
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
                            <Typography style={{color: "#f14d54", fontSize: 18}}>Create an Account</Typography>
                        </Breadcrumbs>
                    </div>
                    <div className="title">
                        Login or Create an Account
                    </div>
                    <div className="line"></div>
                </div>

                <div className="sub-title">
                    Personal Information    
                </div>   

                <div className="left-form">
                    <div className="instruction">
                        Please enter the following information to create your account
                    </div>

                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
                    {({value, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
                    <div className="flex-container">
                        <div className='flex-item-left'>
                            <label htmlFor="first-name">First Name *</label><br />
                            <TextField type="text" name="firstName" id='first-name' style={{width: "95%", marginBottom: 10, marginTop: 10}} onChange={handleChange} onBlur={handleBlur} size="small" />
                            {touched.firstName && errors.firstName && <span style={{color: "red", fontSize: 14, paddingLeft: 1, fontWeight: 100}}>{errors.firstName}</span>}
                        </div>
                        <div className='flex-item-right'>
                            <label htmlFor="last-name">Last Name *</label><br />
                            <TextField type="text" name="lastName" id='last-name' size="small" style={{width: "95%", margin: "15px 0px", marginBottom: 10, marginTop: 10}} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.lastName && errors.lastName && <span style={{color: "red", paddingLeft: 2, fontSize: 14, fontWeight: 100}}>{errors.lastName}</span>}
                        </div>
                        <div className='flex-item-left' style={{marginTop: 8}}>
                            <label htmlFor="email">Email Address *</label><br />
                            <TextField type="email" name="email" id='email' size="small" style={{width: "95%", margin: "15px 0px", marginBottom: 10, marginTop: 10}} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.email && errors.email && <span style={{color: "red", padding: 0, fontSize: 14, fontWeight: 300}}>{errors.email}</span>}
                        </div>
                        <div className='flex-item-right' style={{marginTop: 8}}>
                            <label htmlFor="roles">Roles</label><br />
                            <Select
                            // labelId="demo-simple-select-label"
                            id="roles"
                            // value={age}
                            // label="Age"
                            onChange={handleChange}
                            style={{width: "95%", marginTop: 10, marginBottom: 50}}
                            size="small">
                                <MenuItem value="Seller">Seller</MenuItem>
                                <MenuItem value="Buyer">Buyer</MenuItem>
                            </Select>
                        </div>    
                    </div>)}
                    </Formik>
                </div>

                <div className="sub-title">
                    Login Information    
                </div> 

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
                    {({value, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
                    <div>
                        <div className="flex-container">
                            <div className="flex-item-left">
                                <label htmlFor="first-name">Password *</label><br />
                                <TextField type="text" name="password" id='password' style={{width: "95%", marginTop: 10, marginBottom: 10}} size="small" onChange={handleChange} onBlur={handleBlur}/>
                                {touched.password && errors.password && <span style={{color: "red", fontSize: 14, fontWeight: 300}}>{errors.password}</span>}
                            </div>
                            <div className="flex-item-right">
                                <label htmlFor="first-name">Confirm Password *</label><br />
                                <TextField type="text" name="confirmPassword" id='confirm-password' style={{width: "95%", marginTop: 10, marginBottom: 10}} size="small" onChange={handleChange} onBlur={handleBlur} />
                                {touched.confirmPassword && errors.confirmPassword && <span style={{color: "red", padding: 5, fontSize: 14}}>{errors.confirmPassword}</span>}
                            </div>
                        </div>
                        
                        <div className="register-buttton">
                            <Button variant="contained" sx={{borderRadius: 0, marginTop: 5, textTransform: "capitalize", fontWeight: 600, padding: "6px 30px", fontSize: 19}} type="submit" size="big" id="register-button" isSubmitting>Register</Button>
                        </div>
                    </div>)}
                    </Formik>
            </div>
        </>
    )
}