import React from 'react'
import './container.css';
import PlayerContainer from './PlayerContainer';

const Container = () => {
    return (
        <div className="frame">
            <h3 className="frame-heading">Enter Stats</h3>
            <div className="sub-letter-spacing">
                <div><h3 className="sub-letter">A</h3></div>
                <div><h3 className="sub-letter">B</h3></div>
            </div>
            <PlayerContainer />
        </div>
    )
}

export default Container
