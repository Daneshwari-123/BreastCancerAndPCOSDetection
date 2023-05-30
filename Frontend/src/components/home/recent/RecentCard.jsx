import React from "react"
import { Link } from "react-router-dom"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, location, name,link } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                </div>
                <h4>{name}</h4>
                <p>
                  Category : {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                <Link to={link}>
                  <button className='btn2'>Read
                  
                  </button> 
                  </Link>
                </div>
               
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
