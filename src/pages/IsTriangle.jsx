import { FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { isTriangle } from "../utils/functions";

document.title = "Triangles | Is Triangle?";

function IsTriangle() {

    const [angles, setAngles] = useState({first: 0, second: 0, third: 0});
    const [confirmation, setConfirmation] = useState("");
    
    const inputProps = {
        step: 0.1,
        min: 0
    }

    function formSubmit(event, angles) {
        event.preventDefault();
        const difference = isTriangle(angles);
        difference === 0 ? setConfirmation("These angles can form a triangle") : setConfirmation(`Sorry, you need increase the angles by ${difference} units`);
    }

    return ( 
        <>
            <div className="container-center section-base">
                <h1>Is Triangle?</h1>
                <p>Check if the angles you specify can make a triangle or not.</p>
            </div>
            <form className="container-center section-base" onSubmit={(event) => formSubmit(event, angles)}>
                <div className="container-center section-offwhite" style={{textAlign: "center"}} >
                    <FormControl sx={{ my: 1, mx:"2.5rem", minWidth: 120 }} >
                        <TextField 
                            error={angles.first < 0} 
                            required 
                            inputProps={inputProps} 
                            type="number" 
                            id="firstAngle" label="First Angle" variant="standard" 
                            onChange={(e) => {setAngles({...angles, first:e.target.value})}} 
                        />
                    </FormControl>
                    <FormControl sx={{ my: 1, mx:"2.5rem", minWidth: 120 }} >
                        <TextField 
                            error={angles.second < 0} 
                            required 
                            inputProps={inputProps} 
                            type="number" 
                            id="secondAngle" label="Second Angle" variant="standard" 
                            onChange={(e) => {setAngles({...angles, second:e.target.value})}} 
                        />
                    </FormControl>
                    <FormControl sx={{ my: 1, mx:"2.5rem", minWidth: 120 }} >
                        <TextField 
                            error={angles.third < 0} 
                            required 
                            inputProps={inputProps} 
                            type="number" 
                            id="thirdAngle" label="Third Angle" variant="standard" 
                            onChange={(e) => {setAngles({...angles, third:e.target.value})}} 
                        />
                    </FormControl>
                </div>
                <div className="container-center section-base" style={{textAlign: "center", marginBlockStart: "2rem"}} >
                    <button type="submit" className="primary-link">Check</button>
                </div>
            </form>
            <div className="container-center section-base" style={{textAlign: "center"}} >
                <h1>{confirmation}</h1>
            </div>
        </>
     );
}

export default IsTriangle;