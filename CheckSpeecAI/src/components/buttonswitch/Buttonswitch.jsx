import { Container } from "./styles";

export function Buttonswitch({handleButtonSwitch, isMensal, isAnual, mensal, anual}) {
 
  return (
    <Container>
      <div
        onClick={handleButtonSwitch}
        className={isMensal ? "isMensal" : "isAnual"}
      >
        <small >{mensal}</small>
      </div>
      <div
        onClick={handleButtonSwitch}
        className={isAnual ? "isMensal" : "isAnual"}
      >
        <small>{anual}</small>
      </div>
    </Container>
  
  );
}
