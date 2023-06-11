import {Container} from './styles'

export function Button({title, transparent, type}){

    return(
       
        <Container>
            <a href="#contatos"><button type={type} className={transparent ? "buttonTransparent" : " "}>{title}</button></a>     
        </Container>
      
       
    )
}