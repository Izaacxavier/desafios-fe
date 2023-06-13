import {Container} from './styles'
import { Button } from '../button/Button'


export function HeroSection ({title, titleButton}){
   return(
    <Container>
        <div className='text_content'>
       <strong>{title}</strong>
        </div>
        <div className='button_content'>
        <Button titleAccessibility="Clique para começar agora" titleButton={titleButton}/>
        </div>
    </Container>
   )
}