import {useNavigate} from 'react-router-dom';

export const Apple = () => {
    const Navigate = useNavigate();

    const onHomePageClickListner = () => {
        Navigate("/");
        // alert("Button has been clicked!");
    };

    return(
        <div>
            <div style={{margin: "20px", fontSize: "26px"}}>Apple Page 🍎</div>
            <button style={{margin: "20px", fontSize: "26px"}} onClick={onHomePageClickListner}>Home Page</button>
        </div>
    )
}