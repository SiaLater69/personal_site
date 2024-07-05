import React from 'react'
import speed from '../assets/speed.png'

const Projects = () => {
  return (
    <div className='project'>
    <h1>Projects</h1> 
    <div className='card'>
      <p>Internet speed test built with python and the tkinter GUI library</p>
      <img src={speed} width={100} height={100} alt="internet speed test"/>
      <button className="tooltip">Python</button>
    </div>

    <div className='card'>
      <p>Coming Soon</p>
      </div>
    </div>
  )
}

export default Projects 