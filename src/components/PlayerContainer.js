import React from 'react'
import './playercontainer.css'
import Age from './Age'
import Totalfights from './Totalfights'
import Wins from './Wins'
import Losses from './Losses'
import FightStreak from './FightStreak'
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
                <FightStreak />
                <Active />
                <Reach />
                <Striking />
                <Takedown />
                <div><button>Calculate</button></div>
                <div>
                    <p>Line Fighter A: 1.25 </p>
                    <p>Line Fighter B: 1.70</p>
                </div>
                <div className="middle">
                    <button>Percentage</button>
                    <button>Moneyline</button>
                </div>
            </div>
        </div>
    )
}

export default PlayerContainer
