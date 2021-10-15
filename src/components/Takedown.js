import React from 'react'

const Takedown = () => {
    return (
        <div className="slider">
            <form action="" className="slider-form">
                <label htmlFor="">Takedown Accuracy A</label>
                <input type="range" min="1" max="100" ></input>
                <output id="num">0</output>%
            </form>
            <form action="" className="slider-form">
                <label htmlFor="">Takedown Accuracy B</label>
                <input type="range" min="1" max="100" ></input>
                <output id="num">0</output>%
            </form>
        </div>
    )
}

export default Takedown
