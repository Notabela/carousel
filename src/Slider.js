import React, {Component} from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

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
                "images/slide-6.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
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

        console.log(this.state.currentIndex, this.state.translateValue)
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    // Utility function to render each image - will be passed to map
    eachImage = (image, i) =>
    {
        return ( <Slide key={i} image={image} /> )
    }

    render()
    {
        const slideStyle = {
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform 0.30s'
        }

        return (
            <div className="slider">

                <div className="slider-wrapper" style={slideStyle}>
                    { this.state.images.map(this.eachImage) }
                </div>

                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}

export default Slider