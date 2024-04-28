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
        <img src='/images/vite.svg' alt='test' />
        <ProgressBar completed={props.progressValue} bgColor="#39a900" customLabel=' ' />
        intermedio
      </div>
    </section>
  )
}

export default PortfolioSection