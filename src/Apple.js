import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Avatar, Popover } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const Apple = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState('Ghanshyam Oza');
    const [email, setEmail] = useState('Gmo@test.com');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
      };

    const onHomePageClickListner = () => {
        console.log("name and email: ", name, email);
        Navigate("/");
    };

    return(
        <div style={{padding: 5}}>
            {/* <div style={{margin: "20px", fontSize: "26px"}}>Apple Page 🍎</div> */}
            <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", columnGap: 5}} >
                <div onClick={handleClick} style={{display: "flex", justifyContent: "flex-end", alignItems: "center", columnGap: 5, cursor: "pointer"}}>
                    <Avatar sx={{ bgcolor: "blue" }}>GO</Avatar>
                </div>
            </div>
            <div style={{padding: 5, display: "flex", flexDirection: "column", rowGap: 10}}>
                <TextField type="text" variant="outlined" label="Name" value={name} placeholder='Name' onChange={(e) => {
                    setName(e.target.value);
                }}/>
                <TextField type="email" variant="outlined" label="Email" value={email} placeholder='Email' onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <Button variant="contained" onClick={onHomePageClickListner}>Submit</Button>
            </div>
            
            <Popover 
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            >
                <div style={{padding: 5}}>
                    <div style={{margin: 8, fontWeight: 500}}>Ghanshyam Oza</div>
                    <LogoutIcon style={{cursor: "pointer", marginLeft: 8, marginBottom: 3}} onClick={onHomePageClickListner}/>
                </div>
                {/* <Button style={{padding: 10, cursor: "pointer"}} variant="contained" onClick={onHomePageClickListner}>Logout <LogoutIcon/></Button> */}
            </Popover>

        </div>
    )
}