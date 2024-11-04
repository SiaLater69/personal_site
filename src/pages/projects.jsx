import React from 'react'
import electric from '../assets/electric.png'
import qes from '../assets/qes.png'
import dadsEat from '../assets/dadsEat.png'
import ethan from '../assets/ethan.png'
import business from '../assets/businessService.png'

const Projects = () => {
  return (
    <div className='project h-screen'>
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
      <div className='card'>
        <p>Content Creator Site</p>
        <a href="https://content-creator-site.vercel.app/"><img src={ethan} width={600} height={300} alt="content creator site"/></a>
        <button className="tooltip">React</button>
        <button className="tooltip">TypeScript</button>
        <button className="tooltip">Tailwind CSS</button>
      </div>
      <div className='card'>
        <p>Business Service</p>
        <a href="https://business-service.vercel.app/"><img src={business} width={600} height={300} alt="content creator site"/></a>
        <button className="tooltip">React</button>
        <button className="tooltip">TypeScript</button>
        <button className="tooltip">Tailwind CSS</button>
      </div>
      <div className='card h-screen mt-10'>
      <p>Coming Soon...</p>
      </div>

    </div>
  )
}

export default Projects 