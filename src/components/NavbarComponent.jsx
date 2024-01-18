import { MagnifyingGlass } from "phosphor-react";
import {Navbar, Button } from "keep-react";
import image from "../images/musicImage.png"
import { PopoverComponent } from "./PopContact";
import { TabsComponent } from "./TabComponent";
import { Avatar,Card } from "keep-react";
import Image from '../images/Ismael.jpg'


export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-black p-3">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <img src={image} alt="" className="" />

          </Navbar.Brand>

        </Navbar.Container>

          <h1 style={{fontFamily: 'Playfair Display'}} className="text-5xl text-white font-serif">FRAGMENTS PER COMPARTIR</h1>
      
        <Navbar.Container className="flex">
        <PopoverComponent />
      
        </Navbar.Container>
      
      </Navbar.Container>
    </Navbar>
  );
}
