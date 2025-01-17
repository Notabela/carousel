import React from 'react'

const Slide = ({image}) => { 
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return <div className="slide" style={styles}></div> 
}

export default Slide