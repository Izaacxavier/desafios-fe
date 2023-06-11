import { useState } from 'react'
import {Container} from './styles'

export function MenuMobile ({isOpen, setisOpen, setMenuIsOpen}){
   
    function closeMenuMobile() {
        setisOpen(false)
        setMenuIsOpen(true)
    }

    if(isOpen){
        return(
       
            <Container>
                <ul>
                    <li onClick={closeMenuMobile}><a href="#home">Home</a></li>
                    <li onClick={closeMenuMobile}><a href="#solucoes">Soluções</a></li>
                    <li onClick={closeMenuMobile}><a href="#clientes">Clientes</a></li>
                    <li onClick={closeMenuMobile}><a href="#precos">Preços</a></li>
                    <li onClick={closeMenuMobile}><a href="#contatos">Contato</a></li>
                </ul>
            </Container>
           
        )
      
    }  else{
        null
    }
}