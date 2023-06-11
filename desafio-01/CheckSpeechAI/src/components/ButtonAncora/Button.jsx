import {Container} from './styles'

export function ButtonAncora({title, transparent, type}){

    return(
       
        <Container>
            <a type={type} className={transparent ? "buttonTransparent" : " "}>{title}</a>  
            <a href=""></a>
        </Container>
      
       
    )
}