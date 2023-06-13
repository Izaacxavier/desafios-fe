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
          <a href="https://www.instagram.com/?__coig_restricted=1" title="https://www.instagram.com/?__coig_restricted=1">
              <InstagramLogo/>
          </a>
          <a href="https://www.facebook.com" title="https://www.facebook.com">
            <FacebookLogo />
          </a>
          <a href="https://www.linkedin.com/feed/" title="https://www.linkedin.com/feed/">
            <LinkedinLogo />
          </a>
          <a href="https://twitter.com/home" title="https://twitter.com/home">
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
