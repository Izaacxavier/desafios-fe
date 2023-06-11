import { t } from 'i18next'
import {Container} from './styles'

export function ButtonMenu({isHeader}){
    return(
  
        <Container>
                <ul className={isHeader ? "button_header" : "button_footer"}>
                    <li><a href="#home">{t("Home")}</a></li>
                    <li><a href="#solucoes">{t("Solutions")}</a></li>
                    <li><a href="#clientes">{t("Clients")}</a></li>
                    <li><a href="#precos">{t("Price")}</a></li>
                    <li><a href="#contatos">{t("Contact")}</a></li>
                </ul>
        </Container>
      
       
    )
}