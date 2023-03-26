import React from 'react'
import './Home.css'
import '../containers.css'
import details from '../../details'

const Home = () => {

  const name = details.info.name
  const role = details.info.role
  const image = details.homeSectionImg
  const resume = details.info.resumeLink

  return (
    <div id="Home">
       <div className="intro">  
          <h3>Hello, I'm </h3>
          <h1>{name}</h1>
          <div className='typewriter'>
            <h1>{role}</h1>
          </div>
          <div className='resumeBtn'><a href={resume}>Resume</a></div>
       </div>
       <div className='hero'>
          <img src={image} alt="coding"/>
       </div>
    </div>
  )
}

export default Home