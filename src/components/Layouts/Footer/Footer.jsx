import { Navbar } from '../../UI/Navbar/Navbar'
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


import './Footer.css'

export const Footer = () => {
  return (
    <footer className='Footer-page'>
        <ul>
            <ItemNavbar style="ul-footer"  content={<FaWhatsapp />} />
            <ItemNavbar content={<CiInstagram />} />
            <ItemNavbar content={<CiLinkedin />} />
        </ul>
    </footer>
  )
}