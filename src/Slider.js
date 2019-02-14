import React, {Component} from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Dots from './Dots'

class Slider extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            images: [
                "images/slide-1.jpg",
                "images/slide-2.jpg",
                "images/slide-3.jpg",
                "images/slide-4.jpg",
                "images/slide-5.jpg",
                "images/slide-6.jpg",
            ],
            currentIndex: 0,
            translateValue: 0,
            autoPlay: false,
            interval: null
        }
        // this.goToNextSlide = this.goToNextSlide.bind(this)
        // this.goToPrevSlide = this.goToPrevSlide.bind(this)
        // this.eachSlide = this.eachSlide.bind(this)
    }

    goToPrevSlide = () =>
    {
        this.setState( prevState => ({
            currentIndex: (prevState.currentIndex <= 0 ? prevState.images.length : prevState.currentIndex) - 1,
            translateValue: (prevState.currentIndex === 0 ? -this.slideWidth() * (prevState.images.length-1) : prevState.translateValue + ( this.slideWidth() ))
        }))
    }

    goToNextSlide = () =>
    {
        this.setState( prevState => ({
            currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
            translateValue: (prevState.currentIndex === this.state.images.length-1 ? 0 : prevState.translateValue + -( this.slideWidth() ))
        }))
    }

    handleDotClick = (i) => 
    {
        this.setState( prevState => {

            if ( i === prevState.currentIndex ) return prevState

            return ({
                currentIndex: i,
                translateValue: i > prevState.currentIndex ? -i * this.slideWidth() : prevState.translateValue + ( prevState.currentIndex - i) * this.slideWidth()
            })
        })
    }

    render()
    {
        const slideStyle = {
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform 0.30s ease-out'
        }

        return (
            <div className="slider">

                <div className="slider-wrapper" style={slideStyle}>
                    { this.state.images.map(this.eachImage) }
                </div>

                <Dots index={this.state.currentIndex} images={this.state.images} dotClick={this.handleDotClick} />
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    // Utility function to render each image - will be passed to map
    eachImage = (image, i) =>
    {
        return ( <Slide key={i} image={image} /> )
    }
}

export default Slider