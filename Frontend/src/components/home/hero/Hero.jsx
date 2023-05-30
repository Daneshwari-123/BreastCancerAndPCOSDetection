import React from "react"
import "./hero.css"
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className="heroTitle">
          Early Detection Saves Lives: Breast Cancer and PCOS Prediction System
            </div>
          <Link to='/tests'>
          <button className="testNowBtn">Test now</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Hero
