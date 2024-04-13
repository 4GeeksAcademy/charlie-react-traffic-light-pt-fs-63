import React, { useState } from "react";
import NewLight from "./newLight"

const Traffic = () => {
    const idleRed = "idle-red"
    const idleYellow = "idle-yellow"
    const idleGreen = "idle-green"
    const idlePurple = "idle-purple"
    const activePurple = "active-purple"

    const [redLight, setRedLight] = useState(idleRed)
    const [yellowLight, setYellowLight] = useState(idleYellow)
    const [greenLight, setGreenLight] = useState(idleGreen)
    const [purpleLight, setPurpleLight] = useState(idlePurple)
    const [exists, setExists] = useState(false)
    const [isOn, setIsOn] = useState(false)


    const handleRedLight = () => {
        if (redLight == "bg-danger") {
            setRedLight(idleRed)
            setIsOn(false)
        } else{ 
            setYellowLight(idleYellow);
            setGreenLight(idleGreen);
            setPurpleLight(idlePurple)
            setRedLight("bg-danger")
            setIsOn("red")
        }
    }

    const handleYellowLight = () => {
        if (yellowLight == "bg-warning") {
            setYellowLight(idleYellow)
            setIsOn(false)
        } else {
            setRedLight(idleRed);
            setGreenLight(idleGreen);
            setPurpleLight(idlePurple)
            setYellowLight("bg-warning")
            setIsOn("yellow")
        }
    }

    const handleGreenLight = () => {
        if (greenLight == "active-green") {
            setGreenLight(idleGreen)
            setIsOn(false)
        } else {
            setYellowLight(idleYellow);
            setPurpleLight(idlePurple)
            setRedLight(idleRed);
            setGreenLight("active-green")
            setIsOn("green")
        }
    }

    const handlePurpleLight = () => {
        if (purpleLight == activePurple) {
            console.log("Is Luminoso")
            setPurpleLight(idlePurple)
            setIsOn(false)
        } else {
            setYellowLight(idleYellow);
            setRedLight(idleRed);
            setGreenLight(idleGreen)
            setPurpleLight(activePurple)
            setIsOn("purple")
        }
    }


    const handleNextColor = () => {
        if (!isOn) { handleRedLight()
        } else if (isOn == "red") { handleYellowLight()
        } else if (isOn == "yellow") { handleGreenLight()
        } else if (isOn == "green") { exists ? handlePurpleLight() : handleRedLight() 
        } else if (isOn == "purple") { handleRedLight()}
    }
    

    const addPurple = () => {
        console.log("añado luz morada...")
        if (!exists) {
            setExists(true)
        }
    }
    console.log(isOn)


    return(
        <div className="mt-3">
            <div className="traffic-box rounded-3 container col-3 col-md-2 bg-dark d-flex flex-column align-items-center gap-2 py-5 px-0">
                <div onClick={handleRedLight} className={`traffic-light ${redLight} rounded-circle`}>
                    
                </div>
                <div onClick={handleYellowLight} className={`traffic-light ${yellowLight} rounded-circle`}>

                </div>
                <div onClick={handleGreenLight} className={`traffic-light ${greenLight} rounded-circle`}>

                </div>
                {exists && <NewLight props={{onClick: handlePurpleLight, color: purpleLight}} />}
            </div>
            <button onClick={handleNextColor} className="btn btn-primary mt-2">Next Light</button>
            {!exists && <button onClick={addPurple} className="btn btn-info mt-2 ms-2">Add Purple Light!</button>}
        </div>
    )
}

export default Traffic