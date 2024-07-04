import React from 'react'
import speed from '../assets/speed.png'

const Projects = () => {
  return (
    <div className='project'>
    <h1>Projects</h1> 
    <div className='card'>
      <p>Internet speed test built with python and the tkinter GUI library</p>
      <img src={speed} width={300} height={300} alt="internet speed test"/>
    </div>
    </div>
  )
}

export default Projects 