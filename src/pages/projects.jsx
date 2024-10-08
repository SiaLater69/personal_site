import React from 'react'
import electric from '../assets/electric.png'
import qes from '../assets/qes.png'
import dadsEat from '../assets/dadsEat.png'

const Projects = () => {
  return (
    <div className='project'>
    <h1>Projects</h1> 
    <div className='card'>
      <p>Electric Car Showcase Site</p>
      <a href="https://fully-charged-psi.vercel.app/"><img src={electric} width={600} height={300} alt="Electric Car Site"/></a>
      <button className="tooltip">React</button>
    </div>

    <div className='card'>
      <p>QES Recruitment Website</p>
      <a href="https://qes-brown.vercel.app/"><img src={qes} width={600} height={300} alt="QES recruitment site"/></a>
      <button className="tooltip">React</button>
      <button className="tooltip">Tailwind CSS</button>
      </div>
      <div className='card'>
      <p>Dads Eat Restaurant</p>
      <a href="https://dad-eats.vercel.app/"><img src={dadsEat} width={600} height={300} alt="Dads Eat Restuarant"/></a>
      <button className="tooltip">React</button>
      <button className="tooltip">Tailwind CSS</button>
      </div>
    </div>
  )
}

export default Projects 