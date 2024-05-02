import React from 'react'
import Main from '../../Layouts/Main/Main'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import "./Home.css"

export const Home = () => {

  return (
    <div className='home'>
      <Sidebar />
      <Main/>
    </div>
  )
}
