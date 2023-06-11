import {Container} from './styles'


export function Section ({title, subtitle, content, id}){
    return(
       <Container>
           <h2 id={id}>{title}</h2>
           <p>{subtitle}</p>

          {content}

       </Container> 
    )
}