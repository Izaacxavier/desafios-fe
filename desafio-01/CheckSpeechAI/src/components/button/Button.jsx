import {Container} from './styles'

export function Button({titleButton, titleAccessibility, transparent, type}){

    return(
       
        <Container>
            <a href="#contatos"><button type={type} title={titleAccessibility} className={transparent ? "buttonTransparent" : " "}>{titleButton}</button></a>     
        </Container>
      
       
    )
}