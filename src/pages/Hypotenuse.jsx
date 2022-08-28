import { useState } from "react";
import {getHypotenuse} from "../utils/functions";
import { FormControl, TextField } from "@mui/material";

function Hypotenuse() {

    const [sides, setSides] = useState({first: 0, second: 0});
    const [triangleRep, setTriangleRep] = useState({left: 0, right: 0, bottom: 0});
    const [confirmation, setConfirmation] = useState("");
    
    const inputProps = {
        step: 0.1,
        min: 0
    }

    const triangleStyle = {
        width: 0,
        height: 0,
        transition: "150ms ease-in-out",
        borderLeft: `${triangleRep.left}0px solid transparent`,
        borderRight: `${triangleRep.right}0px solid transparent`,
        borderBottom: `${triangleRep.bottom}0px solid #1976d2`
    }

    function formSubmit(event, sides) {
        event.preventDefault();
        const thirdSide = getHypotenuse(sides);
        setTriangleRep({...triangleRep, left: sides.first, right: sides.second, bottom: thirdSide});
        setConfirmation(`The Hypotenuse is ${thirdSide}`);
    }

    return ( 
        <>
            <div className="container-center section-base">
                <h1>Hypotenuse Finder</h1>
            </div>
            <form className="container-center section-base" onSubmit={(event) => formSubmit(event, sides)}>
                <div className="container-center section-offwhite flex" style={{justifyContent: "center", "--gap": "5rem"}} >
                    <FormControl sx={{ my: 1, mx:"2.5rem", minWidth: 120 }} >
                        <TextField 
                            error={sides.first < 0} 
                            required 
                            inputProps={inputProps} 
                            type="number" 
                            id="firstSide" label="First Side" variant="standard" 
                            onChange={(e) => {setSides({...sides, first:e.target.value})}} 
                        />
                    </FormControl>
                    <FormControl sx={{ my: 1, mx:"2.5rem", minWidth: 120 }} >
                        <TextField 
                            error={sides.second < 0} 
                            required 
                            inputProps={inputProps} 
                            type="number" 
                            id="secondSide" label="Second Side" variant="standard" 
                            onChange={(e) => {setSides({...sides, second:e.target.value})}} 
                        />
                    </FormControl>
                </div>
                <div className="container-center section-base" style={{textAlign: "center", marginBlockStart: "2rem"}} >
                    <button type="submit" className="primary-link">Calculate</button>
                </div>
            </form>
            <div className="container-center section-base flex" style={{justifyContent: "center", alignItems: "center"}} >
                <h1>{confirmation}</h1>
                <div style={triangleStyle}></div>
            </div>
        </>
     );
}

export default Hypotenuse;