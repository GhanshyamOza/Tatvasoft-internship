import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'

export const Apple = () => {
    const Navigate = useNavigate();

    const onHomePageClickListner = () => {
        Navigate("/");
        // alert("Button has been clicked!");
    };

    return(
        <div>
            <div style={{margin: "20px", fontSize: "26px"}}>Apple Page 🍎</div>
            <Button variant="contained" onClick={onHomePageClickListner}>Home Page</Button>
        </div>
    )
}