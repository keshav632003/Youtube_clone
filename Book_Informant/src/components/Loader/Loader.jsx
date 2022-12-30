import React from 'react'
import LoaderImg from '../../images/icons8-loading-circle.gif'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoaderImg} alt="loader"></img>
    </div>
  )
}

export default Loader
