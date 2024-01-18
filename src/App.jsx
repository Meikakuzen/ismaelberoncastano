import React from 'react'
import {NavbarComponent}  from './components/NavbarComponent'
import { CardComponent } from './components/CardComponent'


export const App = () => {
  return (
    <div className="bg-orange-500 container max-h-full min-h-full">
    <NavbarComponent />
    <CardComponent />
  
    <footer className="flex bg-orange-400 p-6 mt-7 justify-around align-middle">
      <p className="font-bold text-lg text-white">Web DIY</p>
      <p className="font-bold text-lg text-white">Ja tens el meu contacte!</p>
    </footer>
    </div>
  )
}
