import React, { useState } from 'react'
import './playercontainer.css'

const Age = () => {
    const [ageA, setAgeA] = useState(" ");

    const handleChangeA = (event) => {
        setAgeA(event.target.value)
    }

    const [ageB, setAgeB] = useState(" ");

    const handleChangeB = (event) => {
        setAgeB(event.target.value)
    }

    return (
        <div className="middle">
            {/* <form action="" className="form-margin"> */}
            <select value={ageA} onChange={handleChangeA} >
                <option selected value=" ">AGE A</option>
                <option value="7">-16 Younger</option>
                <option value="6.6">-14-15 Younger</option>
                <option value="6.5">-12-13 Younger</option>
                <option value="6.4">-11 Younger</option>
                <option value="6.2">-10 Younger</option>
                <option value="6.1">-9 Younger</option>
                <option value="5.8">-8 Younger</option>
                <option value="5.7">-7 Younger</option>
                <option value="5.7">-6 Younger</option>
                <option value="5.6">-5 Younger</option>
                <option value="5.5">-4 Younger</option>
                <option value="5.4">-3 Younger</option>
                <option value="5.3">-2 Younger</option>
                <option value="5.2">-1 Younger</option>
                <option value="5">0</option>
                <option value="4.6">+1 Older</option>
                <option value="4.5">+2 Older</option>
                <option value="4.4">+3 Older</option>
                <option value="4.3">+4 Older</option>
                <option value="4.1">+5 Older</option>
                <option value="4.1">+6 Older</option>
                <option value="4.1">+7 Older</option>
                <option value="4">+8 Older</option>
                <option value="3.8">+9 Older</option>
                <option value="3.7">+10 Older</option>
                <option value="3.6">+11 Older</option>
                <option value="3.5">+12-13 Older</option>
                <option value="3.4">+14-15 Older</option>
                <option value="3">+16 Older</option>
            </select>
            <label htmlFor="">Age</label>
            {/* </form> */}
            {/* <form action="" className="form-margin"> */}
            {/* <label htmlFor="">Age</label> */}
            <select value={ageB} onChange={handleChangeB}>
                <option selected value=" ">AGE B</option>
                <option value="7">-16 Younger</option>
                <option value="6.6">-14-15 Younger</option>
                <option value="6.5">-12-13 Younger</option>
                <option value="6.4">-11 Younger</option>
                <option value="6.2">-10 Younger</option>
                <option value="6.1">-9 Younger</option>
                <option value="5.8">-8 Younger</option>
                <option value="5.7">-7 Younger</option>
                <option value="5.7">-6 Younger</option>
                <option value="5.6">-5 Younger</option>
                <option value="5.5">-4 Younger</option>
                <option value="5.4">-3 Younger</option>
                <option value="5.3">-2 Younger</option>
                <option value="5.2">-1 Younger</option>
                <option value="5">0</option>
                <option value="4.6">+1 Older</option>
                <option value="4.5">+2 Older</option>
                <option value="4.4">+3 Older</option>
                <option value="4.3">+4 Older</option>
                <option value="4.1">+5 Older</option>
                <option value="4.1">+6 Older</option>
                <option value="4.1">+7 Older</option>
                <option value="4">+8 Older</option>
                <option value="3.8">+9 Older</option>
                <option value="3.7">+10 Older</option>
                <option value="3.6">+11 Older</option>
                <option value="3.5">+12-13 Older</option>
                <option value="3.4">+14-15 Older</option>
                <option value="3">+16 Older</option>
            </select>
            {/* </form> */}
        </div>
    )
}

export default Age
