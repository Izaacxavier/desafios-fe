import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'
import {Container} from './styles'

export function AccordionCard({title, description}){

  const [CardIsOpen, setcardIsOpen] = useState(true)


  function openCard (){
    console.log("clicou")
    if(CardIsOpen){
    setcardIsOpen(false)
    }else{
      setcardIsOpen(true)
    }
  }

    return(
        <Container>
          <header title='clique para saber mais' onClick={openCard}>
            <h3>{title}</h3>
           {CardIsOpen ? <CaretDown/> : <CaretUp/>}
          </header>
          <main className={CardIsOpen ? "card_close" : "card_open"}>
            <p>
            {description}
            </p>
          </main>
        </Container>
      
    )
}