import React from 'react'
import {NavbarComponent}  from './components/NavbarComponent'
import { CardComponent } from './components/CardComponent'
import {Card} from 'keep-react'
import { InstagramLogo } from 'phosphor-react'


export const App = () => {
  return (
    <div className="bg-orange-500 container max-h-full min-h-full min-w-full max-w-full overflow-hidden">
    <NavbarComponent />
    <CardComponent />
  
    <footer className="flex bg-orange-400 p-6 mt-7 justify-around align-middle">
      <p className="font-bold text-lg text-white">Web DIY</p>
      <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<InstagramLogo size={24} color="red" weight="fill" />}
            href="https://www.instagram.com/ismaelberoncastano?igsh=dDdkZ3lzZHIxajRz"
            title="Instagram"
          />
      <p className="font-bold text-lg text-white">Ja tens el meu contacte!</p>
    </footer>
    </div>
  )
}
