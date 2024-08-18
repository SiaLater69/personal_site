import React from 'react'
import electric from '../assets/electric.png'

const Projects = () => {
  return (
    <div className='project'>
    <h1>Projects</h1> 
    <div className='card'>
    
      <p>Electric Car Showcase Site</p>
      <a href="https://github.com/SiaLater69/fully-charged"><img src={electric} width={400} height={250} alt="Electric Car Site"/></a>
      <button className="tooltip">React</button>
    </div>

    <div className='card'>
      <p>Coming Soon</p>
      </div>
    </div>
  )
}

export default Projects 