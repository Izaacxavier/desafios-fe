import { List, X } from "@phosphor-icons/react";
// icon-flags
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {Container} from './styles'
import { Logo } from "../logo/logo";
import { ButtonMenu } from "../buttonMenu/ButtonMenu";
import { useState } from "react";
import i18n from "../../utils/i18n";


export function Headermenu({handleMenuMobile, OpenedMenuMobile}){

        const [lgMenuisOpen, setLgMenuisOpen] = useState(false)
        const [language, setLanguage] = useState("pt")
        
    function handleLanguageTranslate(){
        if(!lgMenuisOpen){
            setLgMenuisOpen(true)
        }else{
            setLgMenuisOpen(false)
        }
        
    }

    const changeLanguage = value =>{ 
        setLgMenuisOpen(false)
        setLanguage(value) 
        i18n.changeLanguage(value)
        .than(()=>{setLanguage(value)})
        .cacth((err) => {console.log(err)})
        
    }
  
    return(
        <Container>
            <nav>
               <Logo/>
               <div className="ul">
               <ButtonMenu isHeader/>
               </div>
              

              <div className="menu_mobile">
              <div className="button_traslate">
                    <button onClick={handleLanguageTranslate}>
                      <span className={
                    language === 'pt' ? "fi fi-br" : "fi fi-br"| 
                    language === 'es' ? "fi fi-es" : "fi fi-br"| 
                    language === 'en' ? "fi fi-us" : "fi fi-br"}></span>
                    </button>
                    <div className={lgMenuisOpen ? "flags_menu_isOpen" :"flags_menu_choose" }>
                    <span onClick={() =>changeLanguage('en')} className="fi fi-us"></span>
                    <span onClick={() =>changeLanguage('pt')} className="fi fi-br"></span>                    
                    <span onClick={() =>changeLanguage('es')} className="fi fi-es"></span>                    
                    </div>

                </div>

                <div className="hamburgue_menu">
                <button onClick={handleMenuMobile} className="button_open">{OpenedMenuMobile ? <List size={32} color="white" /> : <X size={32}color="white"/>}</button>
                <button className="button_closed"></button>
                </div>
              </div>

            </nav>
            
        </Container>
    )
}