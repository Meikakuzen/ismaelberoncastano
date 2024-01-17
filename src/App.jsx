import React from 'react'
import {NavbarComponent}  from './components/NavbarComponent'
import { CardComponent } from './components/CardComponent'


export const App = () => {
  return (
    <div className="bg-orange-500 container">
    <NavbarComponent />
    <CardComponent />
  
    <footer className="flex bg-orange-400 p-6 mt-7 justify-around align-middle">
      <p className="font-bold text-lg text-white">Web feta per mi en una tarda, es nota oi?</p>
      <p className="font-bold text-lg text-white">Contacta amb mi pel correu!!</p>
      <p className="font-bold text-lg text-white">Tots els drets reservats</p>
      
    </footer>
    </div>
  )
}
