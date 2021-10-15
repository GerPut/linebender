import React from 'react'

const Striking = () => {
    return (
        <div>
            <form action="" className="slider-form">
                <label htmlFor="">Striking Accuracy A</label>
                <input type="range" min="1" max="100" ></input>
                <output id="num">0</output>%
            </form>
            <form action="" className="slider-form">
                <label htmlFor="">Striking Accuracy B</label>
                <input type="range" min="1" max="100" onInput="num.value = this.value" className="slideball"></input>
                <output id="num">0</output>%
            </form>
        </div>
    )
}

export default Striking
