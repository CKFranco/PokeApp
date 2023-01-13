import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { PokeLogo } from "./PokeLogo.js";


import React from 'react'

export const PokeNavbar = () => {
  return (
    <Navbar isBordered variant="floating">
        <Navbar.Content>
          <Navbar.Link href="/"><PokeLogo/>Pokémon</Navbar.Link>    
        </Navbar.Content>    
        
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link isActive href="/favorites">Favorites</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}
