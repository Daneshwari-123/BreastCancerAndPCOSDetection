import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"
import Back from "../../common/Back";
import img from "../../images/contact.gif"
const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Meet Our Team' subtitle='' />

          <div className='content mtop grid4'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>

                  <label></label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li className="iconSize" key={index}>{icon}</li>
                    ))}
                  </ul>


                  <div className='button flex'>
                    {/* <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* <section className='contact mb'>
        <Back name='Contact Us' title='Send your messages' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section> */}
    </>
  )
}

export default Team
