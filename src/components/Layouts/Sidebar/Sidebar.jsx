import React from 'react'
import './Sidebar.css'
import { FaLinkedin } from "react-icons/fa6";



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src='/images/gato.jpg'/>
      <h2>NOMBRE PERSONA</h2>
      <ul>
          <li>Perfil</li>
          <li>Proyectos</li>
          <li></li>
          <li></li>

      </ul>
    </div>
  )
}

export default Sidebar