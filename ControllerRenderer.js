import React from "react";
import {useState, useContext} from "react";

function ControllerRenderer(props) {
    const {setBallpitVars, ballpitVars, handleRandomize, handleRender} = props;
    const [ballpitControllerVisible, setBallpitControllerVisible] =
        useState(false);

    const handleAmtChange = (e) => {
        setBallpitVars({...ballpitVars, amount: e.target.value});
    };

    const handleRadChange = (e) => {
        setBallpitVars({...ballpitVars, radius: e.target.value});
    };

    const handleSpdChange = (e) => {
        setBallpitVars({...ballpitVars, speed: e.target.value});
    };

    return (
        <div id="Controller" className={``}>
            <div
                className="animation-controller"
            >
                <span className="header">Animation Controller</span>
                <div> Amount</div>

                <input
                    onChange={handleAmtChange}
                    id="amtInput"
                    value={ballpitVars.amount}
                    type="text"
                />

                <div> Radius Coefficient</div>

                <input
                    onChange={handleRadChange}
                    id="radInput"
                    value={ballpitVars.radius}
                    type="text"
                />
                <div> Speed</div>

                <input
                    onChange={handleSpdChange}
                    id="spdInput"
                    value={ballpitVars.speed}
                    type="text"
                />

                <br/>
                <div>
                    <button onClick={handleRandomize} id="randomer" name="random">
                        Randomize
                    </button>
                    <button onClick={handleRender} id="renderer" name="render">
                        Re-Render
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ControllerRenderer;
