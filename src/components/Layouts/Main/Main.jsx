import React from 'react'


import './Main.css'
import { Section } from '../Section/Section'

export const Main = () => {
  return (
    <div className='body-main'>
        <Section>
            <div className='img-container'>
            <img src="https://i.pinimg.com/564x/ae/75/62/ae75623f907663ab7305379960f43647.jpg" alt="" className='img-main'  />
            </div>
        </Section>

        <Section>
          <div className='box2'>
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, laboriosam? Voluptatibus necessitatibus fuga ipsam quas perferendis quod, harum veniam quidem temporibus corporis, eum quis culpa exercitationem sed voluptate impedit? Autem.</p>
            </div>
        </Section>
    </div>
    
  )
}
