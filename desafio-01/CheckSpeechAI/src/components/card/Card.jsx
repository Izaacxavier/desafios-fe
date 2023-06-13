import { t } from "i18next";
import { Button } from "../button/Button";
import { Container } from "./styles";

export function Card({title, cardWithMain, buttonIsTransparent, Isenterprise, content, price, pack}) {



  return (
    <Container>
        <div className={cardWithMain ? "card_main" : "card" | Isenterprise ? "card_enterprise" : "card"}>
      <header>
      
        <h2>{title}</h2>
      </header>
      <main>
        <ul>
          {content}
        </ul>
      </main>

      <footer>
        <strong>
          <span>R$</span> {price} {pack}
        </strong>

        <div className="button_container">
          <Button titleAccessibility="Clique para escolher plano" titleButton={t('ButtonTitleChoose')} transparent={buttonIsTransparent}/>
        </div>
      </footer>
      </div>
    </Container>
  );
}
