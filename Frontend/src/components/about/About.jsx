import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import FaqComp from "../home/FaqComponent/FaqComp"
import img from "../images/banner3.jpg"
import "./about.css"
import aboutBanner from "../images/aboutBanner.jpeg"
const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='' title='About the project' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Project Overview' subtitle='' />

            <p>With the power of the Internet available to almost every individual, a website with a Disease Detection System will open up a whole new form of diagnosis. In this Internet-savvy world, websites are the only common mode of attachment between different people and communities in our society. People of all ages and almost all classes follow the Internet vastly. So building a website for curing health-related problems is indeed a good idea in today’s problem-prone world.
            </p>
          </div>
          <div className='right row'>
            <img src={aboutBanner} alt='' className="AboutBanner" />
          </div>
        </div>

      </section>
      <FaqComp />
    </>
  )
}

export default About
