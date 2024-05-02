import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import "./PortfolioSection.css"

const PortfolioSection = (props) => {
  return (
    <section className={`portfolio-section`}>
      <div className={`title ${props.hasBorder === false ? 'no-border' : ''}`}>
        {props.title}
      </div>
      <div>{props.children}</div>
      <div className=''>
        
        
      </div>
      
    </section>
  )
}

export default PortfolioSection