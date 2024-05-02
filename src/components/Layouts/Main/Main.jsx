import React from 'react'
import './Main.css'
import PortfolioSection from '../../UI/PortfolioSection/PortfolioSection'

const Main = () => {
  return (
    <main className='main'>

      <PortfolioSection title="PERFIL" hasBorder={true}>
        <img src='public/images/logosena.png'></img>
        <p>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
        manera para permitir la presentación de elementos gráficos en documentos, sin
        necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
        los diseños y la forma del contenido antes de que el contenido se haya creado, dando
        al diseño y al proceso de producción más libertad.</p>
      </PortfolioSection>

      <PortfolioSection title="PROYECTOS" hasBorder={true} >
        content 2
      </PortfolioSection>

      <PortfolioSection title="REFERENCIAS" hasBorder={true} >
        content 3
      </PortfolioSection>
      <PortfolioSection title="EXPERIENCIA" hasBorder={false} >
          
      </PortfolioSection>

      <PortfolioSection title="EXPERIENCIA" hasBorder={true} >
    
          
      </PortfolioSection>
    </main>  
  )
}

export default Main
