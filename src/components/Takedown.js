import React from 'react'

const Takedown = () => {
    return (
        <div className="slider">
            <div action="" className="slider-form">
                <label htmlFor="">Takedown Accuracy A</label>
                <input type="range" min="1" max="100" ></input>
                <output id="num">0</output>%
            </div>
            <div action="" className="slider-form">
                <label htmlFor="">Takedown Accuracy B</label>
                <input type="range" min="1" max="100" ></input>
                <output id="num">0</output>%
            </div>
        </div>
    )
}

export default Takedown
