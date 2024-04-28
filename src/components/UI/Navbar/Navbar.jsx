import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <ItemNavbar style='nav-home' content='Quienes somos' />
        <ItemNavbar content='Acerca de nosotros' />
        <ItemNavbar content='FAQ' />
      </ul>

      <Image src="url1" size="big" />
      <Image src="url2" size="small"/>

      <PortfolioSection title="perfil">
        <p>Lorem ipsum dolor sit amet con</p>
      </PortfolioSection>
      <PortfolioSection title="proyectos">
        <>
          <ProyectCard />
          <ProyectCard />
          <ProyectCard />
          <ProyectCard />
        </>
      </PortfolioSection>
      <PortfolioSection title="otro">
        <RefCard />
        <RefCard />
        <RefCard />
      </PortfolioSection>
      <PortfolioSection title="expereincias" content={<ExpCard />} hasBorder={false} />
    </nav>
  )
}
