import React from 'react'
import image from '../images/blimages2.jpg'
const Main = () => {
  return (
    <section className='main-section'>
      <img className='main-img' src={image} />
      <h1 className='main-text'>You Only Live Once.<span>Y.O.L.O</span> </h1>
    </section>
  )
}

export default Main
