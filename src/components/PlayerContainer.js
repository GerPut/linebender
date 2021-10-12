import React from 'react'
import './playercontainer.css'
import Age from './Age'
import Totalfights from './Totalfights'

const PlayerContainer = () => {
    return (
        <div className="player-container">
            <div className="playerA">
                <h2 className="playerA-heading">Player A</h2>
                <Age />
                <Totalfights />
            </div>

            <div className="vl"></div>
            <div className="playerB">
                <h2 className="playerB-heading">Player B</h2>
                <Age />
                <Totalfights />
            </div>
        </div>
    )
}

export default PlayerContainer
