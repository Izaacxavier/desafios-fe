import { CaretDown, CaretUp, Cookie } from "@phosphor-icons/react";
import { useState } from "react";
import { Container, Content } from "./styles";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export function CookiesNoticeBanner() {

  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [accept, setAccept] = useState(true);

  const cookieIsAccept = Cookies.get("checkspeechAcceptCookies")

  function openConsense() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  function isAcceptCookies() {
    Cookies.set("checkspeechAcceptCookies", true, { expires: 5 })
    setAccept(false);
    
  }

  if (accept && !cookieIsAccept) {
    return (
      <Container>
        <Content>
          <header>
            <div className="icon_content">
              <Cookie size={32} />
              <button onClick={isAcceptCookies}>{t("AcceptCookies")}</button>
            </div>
          </header>
          <main>
            <div className="content_main">
              <strong>{t("ConsenseTermsTitle")}</strong>
              <p>
                {t("ConsenseText")}
              </p>
            </div>
          </main>
          <footer>
            <button onClick={openConsense}>
              {t('ReadMore')} {!isOpen ? <CaretDown /> : <CaretUp />}
            </button>
            <div className={isOpen ? "consenseOpen" : "consenseClosed"}>
              <small>
                Os cookies são pequenos ficheiros de texto que podem ser
                utilizados por websites para tornar a experiência do usuário
                melhor e mais eficiente. A lei diz que podemos armazenar cookies
                no seu dispositivo se forem estritamente necessários para o
                funcionamento deste site. Para todos os outros tipos de cookies
                precisamos da sua permissão. Este site utiliza diferentes tipos
                de cookies. Alguns cookies são colocados por serviços
                independentes que aparecem nas nossas páginas. Pode a qualquer
                momento alterar ou retirar o seu consentimento da Declaração de
                Cookies no nosso website. Saiba mais sobre quem somos, como pode
                contactar-nos e como processamos os dados pessoais na nossa
                Política de Privacidade. Indique sua ID de consentimento e a
                data quando entrar em contato conosco sobre o seu consentimento.
              </small>
            </div>
          </footer>
        </Content>
      </Container>
    );
  } else {
    null;
  }
}
