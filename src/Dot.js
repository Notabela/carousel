import React from 'react'

const Dot = ({id, active, dotClick}) => {

    const classes = active ? 'dot dot-active' : 'dot'
    return (
        <div className={classes} onClick={() => dotClick(id)}></div>
    )
}

export default Dot