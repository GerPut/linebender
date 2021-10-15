import React from 'react'

const Active = () => {
    return (
        <div className="middle">
            <form action="" className="form-margin">
                <select name="" id="">
                    <option value="" disabled selected>Athlete A</option>
                    <option value="10">0-4 months</option>
                    <option value="8.5">5-7 months</option>
                    <option value="7">8-10 months</option>
                    <option value="4">11-13 months</option>
                    <option value="3">14 months +</option>
                </select>
                <label htmlFor="">Last Active A</label>
            </form>
            <form action="" className="form-margin">
                <label htmlFor="">Last Active B</label>
                <select name="" id="">
                    <option value="" disabled selected>Athlete B</option>
                    <option value="10">0-4 months</option>
                    <option value="8.5">5-7 months</option>
                    <option value="7">8-10 months</option>
                    <option value="4">11-13 months</option>
                    <option value="3">14 months +</option>
                </select>
            </form>
        </div>
    )
}

export default Active