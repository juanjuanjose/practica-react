import {Logo} from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/Navbar/Navbar'

import './Header.css'

export const Header = () => {
  return (
    <header className='header-page'>
      <Logo />
      <Navbar />
    </header>
  )
}
