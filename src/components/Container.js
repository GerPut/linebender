import React from 'react'
import './container.css';
import PlayerContainer from './PlayerContainer';

const Container = () => {
    return (
        <div className="frame">
            <h3 className="frame-heading">Enter Stats</h3>
            <PlayerContainer />
        </div>
    )
}

export default Container
