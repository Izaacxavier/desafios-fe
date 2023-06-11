import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { t } from "i18next";
import { ButtonMenu } from "../buttonMenu/ButtonMenu";
import { Logo } from "../logo/logo";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="footer_container">
        <div className="content_1">
          <Logo />
          <p>
            {t("TextFooter")}
          </p>
        </div>
        <div className="social">
          <div>
          <a href="">
              <InstagramLogo/>
          </a>
          <a href="">
            <FacebookLogo />
          </a>
          <a href="">
            <LinkedinLogo />
          </a>
          <a href="">
            <TwitterLogo />
          </a>
          </div>
        </div>
        <div className="content_2">
          <strong>Institucional</strong>
          <ButtonMenu />
        </div>
      </div>

      <div className="copyright">
        <small>Copyright © CheckSpeech AI | By Izaac Xavier</small>
      </div>
    </Container>
  );
}
