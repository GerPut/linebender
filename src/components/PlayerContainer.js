import React from 'react'
import './playercontainer.css'
import Age from './Age'
import Totalfights from './Totalfights'
import Wins from './Wins'
import Losses from './Losses'
import Active from './Active'
import Reach from './Reach'
import Striking from './Striking'
import Takedown from './Takedown'

const PlayerContainer = () => {
    return (
        <div className="player-container">
            <div className="players">
                <Age />
                <Totalfights />
                <Wins />
                <Losses />
                <Active />
                <Reach />
                <Striking />
                <Takedown />
            </div>
        </div>
    )
}

export default PlayerContainer
