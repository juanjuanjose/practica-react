import React from 'react'
import './Main.css'
import PortfolioSection from '../../UI/PortfolioSection/PortfolioSection'

const Main = () => {
  return (
    <main className='main'>

      <PortfolioSection title="titulo 1" hasBorder={true} >
        <p>esto tambien funciona</p>
      </PortfolioSection>

      <PortfolioSection title="titulo 2" hasBorder={true} >
        content 2
      </PortfolioSection>

      <PortfolioSection title="titulo 3" hasBorder={true} >
        content 3
      </PortfolioSection>
      <PortfolioSection title="titulo 4" hasBorder={false} progressValue="95">
        content 4
      </PortfolioSection>
    </main>  
  )
}

export default Main
