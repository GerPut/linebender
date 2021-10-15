import React from 'react'

const FightStreak = () => {
    return (
        <div className="middle">
            <form action="" className="form-margin">
                <select name="" id="">
                    <option value="" disabled selected>...</option>
                    <option value="2">L L L</option>
                    <option value="5">L L W</option>
                    <option value="5.5">L W L</option>
                    <option value="7">L W W</option>
                    <option value="6">W L L</option>
                    <option value="7.5">W L W</option>
                    <option value="8">W W L</option>
                    <option value="10">W W W</option>
                </select>
                <label htmlFor="">Fight Streak A</label>
            </form>
            <form action="" className="form-margin">
                <label htmlFor="">Fight Streak B</label>
                <select name="" id="">
                    <option value="" disabled selected>...</option>
                    <option value="2">L L L</option>
                    <option value="5">L L W</option>
                    <option value="5.5">L W L</option>
                    <option value="7">L W W</option>
                    <option value="6">W L L</option>
                    <option value="7.5">W L W</option>
                    <option value="8">W W L</option>
                    <option value="10">W W W</option>
                </select>
            </form>
        </div>
    )
}

export default FightStreak
