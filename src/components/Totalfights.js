import React from 'react'

const Totalfights = () => {
    return (
        <div className="middle">
            <form action="" className="form-margin">
                <select name="" id="" >
                    <option value="" disabled selected>0</option>
                    <option value="1">1-5</option>
                    <option value="2">6-10</option>
                    <option value="4">11-15</option>
                    <option value="6">15-20</option>
                    <option value="8">20-25</option>
                    <option value="10">26+</option>
                </select>
                <label htmlFor="">Total Fights A</label>
            </form>
            <form action="" className="form-margin">
                <label htmlFor="">Total Fights B</label>
                <select name="" id="">
                    <option value="" disabled selected>0</option>
                    <option value="1">1-5</option>
                    <option value="2">6-10</option>
                    <option value="4">11-15</option>
                    <option value="6">15-20</option>
                    <option value="8">20-25</option>
                    <option value="10">26+</option>
                </select>
            </form>
        </div>
    )
}

export default Totalfights
