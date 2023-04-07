/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";
import './carousel.css' 

const Carousel = (props) => {
  const {children, show, loop} = props
  const [currentIndex, setCurrentIndex] = useState(loop ? show : 0)
  const [length, setLength] = useState(children.length)
  const [isRepeating, setIsRepeating] = useState(loop && children.length > show)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const [touchPosition, setTouchPosition] = useState(null)

  useEffect(() => {
    setLength(children.length)
    setIsRepeating(loop && children.length > show)
  }, [children, loop, show])

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length])

  const next = () => {
    if (isRepeating || currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches ? e.touches[0].clientX : e.clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
      return
    }
  
    const currentTouch = e.touches ? e.touches[0].clientX : e.clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }
  
    if (diff < -5) {
      prev()
    }
    setTouchPosition(null)
  }

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
      }
    }
  }

  const renderExtraPrev = () => {
    const output = []
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index])
    }
    output.reverse()
    return output
  }

  const renderExtraNext = () => {
    const output = []
    for (let index = 0; index < show; index++ ) {
      output.push(children[index])
    }
    return output
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {(isRepeating || currentIndex > 0) &&
    <button type="button" onClick={prev} className="left-arrow">
    &lt;
    </button>
        }
        <div 
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>
          <div className={`carousel-content show-${show}`}
            style={{ transform: `translateX(-${currentIndex * ( 100/ show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined}}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {
              (length > show && isRepeating) &&
                            renderExtraPrev()
            }
            {children}
            {
              (length > show && isRepeating) &&
                            renderExtraNext()
            }
          </div>
        </div>
        {
          (isRepeating || currentIndex < (length - show)) &&
                    <button type="button" onClick={next} className="right-arrow">
                        &gt;
                    </button>
        }
      </div>
    </div>
  )
}

export default Carousel;