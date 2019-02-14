import React from 'react'
import Dot from './Dot'

const Dots = ({ index, images, dotClick }) => {

    const mapDotToImage = (image, i) =>
    {
        let active = ( i === index )

        return (
            <Dot key={i} id={i} active={active} dotClick={dotClick} />
        )
    }
    
    return (
        <div className="dots-container">
            { images.map(mapDotToImage) }
        </div>
    )
}

export default Dots