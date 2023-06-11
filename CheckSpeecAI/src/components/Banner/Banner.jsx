import { Button } from "../button/Button";
import { HeroPattern } from "../HeroPattern";
import { Container } from "./styles";

export function Banner({title, titleSpan, text, titleButton}) {
  return (
    <Container> 
      <HeroPattern/>
      <div className="title" id="home">
        <h1><span>{titleSpan}</span> {title}</h1>
        <p>
          {text}
        </p>

        <div className="button_container">
        <Button title={titleButton} transparent/>
        </div>
      </div>
    </Container>
  );
}
