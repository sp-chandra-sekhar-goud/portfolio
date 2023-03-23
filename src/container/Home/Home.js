import React from 'react'
import './Home.css'
import '../containers.css'
import {Images} from '../../constants/index'

const Home = () => {
  return (
    <div id="Home">
       <div className="intro">  
          <h3>Hello, I'm </h3>
          <h1>Chandra Sekhar</h1>
          <div className='typewriter'>
            <h1>MERN Stack Developer</h1>
          </div>
       </div>
       <div className='hero'>
          <img src={Images.coding} alt="coding"/>
       </div>
    </div>
  )
}

export default Home