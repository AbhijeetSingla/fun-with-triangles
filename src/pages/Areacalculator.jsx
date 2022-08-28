import { FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { getArea } from "../utils/functions";

function Areacalculator() {

    document.title = "Triangles | Area Calculator";

    const [sides, setSides] = useState({first: 0, second: 0});
    const [confirmation, setConfirmation] = useState("");

    const inputProps = {
        step: 0.1,
        min: 0
    }

    function formSubmit(event, sides) {
        event.preventDefault();
        const thirdSide = getArea(sides);
        setConfirmation(`The Area is ${thirdSide}`);
    }

    return ( 
        <>
            <div className="container-center section-base">
                <h1>Area Calculator</h1>
                <p>The area would be rounded off to two decimal places. Also, the height is the perpendicular height.</p>
            </div>
            <form className="container-center section-base" onSubmit={(event) => formSubmit(event, sides)}>
                <div className="container-center section-offwhite flex" style={{justifyContent: "center", "--gap": "5rem"}} >
                    <FormControl sx={{ my: 1, mx:"2.5rem", minWidth: 120 }} >
                        <TextField 
                            error={sides.first < 0} 
                            required 
                            inputProps={inputProps} 
                            type="number" 
                            id="firstSide" label="Base" variant="standard" 
                            onChange={(e) => {setSides({...sides, first:e.target.value})}} 
                        />
                    </FormControl>
                    <FormControl sx={{ my: 1, mx:"2.5rem", minWidth: 120 }} >
                        <TextField 
                            error={sides.second < 0} 
                            required 
                            inputProps={inputProps} 
                            type="number" 
                            id="secondSide" label="Height" variant="standard" 
                            onChange={(e) => {setSides({...sides, second:e.target.value})}} 
                        />
                    </FormControl>
                </div>
                <div className="container-center section-base" style={{textAlign: "center", marginBlockStart: "2rem"}} >
                    <button type="submit" className="primary-link">Calculate</button>
                </div>
            </form>
            <div className="container-center section-base " style={{textAlign: "center"}} >
                <h1>{confirmation}</h1>
            </div>
        </>
     );
}

export default Areacalculator;