import { CookiesNoticeBanner } from "./components/CookiesNoticeBanner/CookiesNoticeBanner";
import { AccordionCard } from "./components/accordionCard/AccordionCard";
import { Buttonswitch } from "./components/buttonswitch/Buttonswitch";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FormSection } from "./components/formSection/FormSection";
import { Headermenu } from "./components/HeaderMenu/HeaderMenu";
import { MenuMobile } from "./components/MenuMobile/MenuMobile";
import { Section } from "./components/section/Section";
import { Footer } from "./components/footer/footer";
import { Banner } from "./components/Banner/Banner";
import { Card } from "./components/card/Card";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import logo4 from "./assets/logo4.svg";
import logo5 from "./assets/logo5.svg";
import logo6 from "./assets/logo6.svg";
import { useState } from "react";
import "./utils/i18n";

import { useTranslation } from "react-i18next";


export function App() {
  // translation
  const { t, i18n } = useTranslation();

  // Preços dos planos
  const precoMensalBegenner = "29";
  const precoAnualBegenner = "328";

  const precoMensalBusiness = "44";
  const precoAnualBusiness = "499";

  const [isMensal, setISmensal] = useState(true);
  const [isAnual, setIsAnual] = useState(false);

  function handleButtonSwitch() {
    if (isMensal) {
      setISmensal(false);
      setIsAnual(true);
    }
    if (isAnual) {
      setISmensal(true);
      setIsAnual(false);
    }
  }

  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

  function handleMenuMobile() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
      setMenuMobileIsOpen(true);
    } else {
      setMenuIsOpen(true);
      setMenuMobileIsOpen(false);
    }
  }

  return (
    <>
      <Headermenu
        handleMenuMobile={handleMenuMobile}
        OpenedMenuMobile={menuIsOpen}
      />
      <MenuMobile 
      isOpen={menuMobileIsOpen}
      setisOpen={setMenuMobileIsOpen}
      setMenuIsOpen={setMenuIsOpen}
       />
      <Banner
        title={t("titleMain")}
        titleSpan={t("titleSpanMain")}
        text={t("paragagraphMain")}
        titleButton={t("ButtonTitleLearnMore")}
      />
      <Section
        id="clientes"
        title={t("titleCliente")}
        content={
          <div className="clientes">
            <div className="group_1">
              <img src={logo1} alt="umbrella" />
              <img src={logo2} alt="volume" />
              <img src={logo3} alt="Chain" />
            </div>
            <div className="group_2">
              <img src={logo4} alt="Border" />
              <img src={logo5} alt="Trace" />
              <img src={logo6} alt="levelUp" />
            </div>

            <div className="hero_content">
              <HeroSection
                title={t("TitleHeroOne")}
                titleButton={t("ButtonTitleStart")}
              />
            </div>
          </div>
        }
      />

      <Section
        id="solucoes"
        title={t("titleSolucoes")}
        subtitle={t("subtitleSesionSolucoes")}
        content={
          <>
            <div className="accordion_container">
              <div className="group_accordion_1">
                <AccordionCard
                  title={t("titleAccordionOne")}
                  description={t("textContentAccordionOne")}
                />
                <AccordionCard
                  title={t("titleAccordionTwo")}
                  description={t("textContentAccordionTwo")}
                />
              </div>
              <div className="group_accordion_2">
                <AccordionCard
                  title={t("titleAccordionThree")}
                  description={t("textContentAccordionThree")}
                />
                <AccordionCard
                  title={t("titleAccordionFour")}
                  description={t("textContentAccordionFour")}
                />
              </div>
            </div>

            <div className="hero_content">
              <HeroSection
                title={t("TitleHero")}
                titleButton={t("ButtonTitleStart")}
              />
            </div>

            <div className="text_solucoes">
              <p>{t("subititleSesionHero")}</p>
            </div>
          </>
        }
      />

      <Section
        id="precos"
        title={t("titlePrecos")}
        content={
          <div className="content_group_cards">
            <div className="button_switch_group">
              <Buttonswitch
                mensal={t("monthy")}
                anual={t("yearly")}
                handleButtonSwitch={handleButtonSwitch}
                isMensal={isMensal}
                isAnual={isAnual}
                tagAnual={isAnual ? "Economize com o plano anual" : " "}
              />
            </div>
            <div className="cards_content">
              <Card
                title="Begenner"
                content={
                  <>
                    <li>{t("cardOnePlanIncludesOne")}</li>
                    <li>{t("cardOnePlanIncludesTwo")}</li>
                    <li>{t("cardOnePlanIncludesThree")}</li>
                    <li>{t("cardOnePlanIncludesFour")}</li>
                  </>
                }
                price={isMensal ? precoMensalBegenner : precoAnualBegenner}
                pack={isMensal ? `/ ${t("month")}` : `/ ${t("yearly")}`}
              />
              <Card
                cardWithMain
                buttonIsTransparent
                title="Business"
                tagAnual={isAnual ? "Economize 20% no plano anual" : " "}
                content={
                  <>
                    <li>{t("cardTwoPlanIncludesOne")}</li>
                    <li>{t("cardTwoPlanIncludesTwo")}</li>
                    <li>{t("cardTwoPlanIncludesThree")}</li>
                    <li>{t("cardTwoPlanIncludesFour")}</li>
                  </>
                }
                price={isMensal ? precoMensalBusiness : precoAnualBusiness}
                pack={isMensal ? `/ ${t("month")}` : `/ ${t("yearly")}`}
              />
              <Card
                title="Enterprise"
                Isenterprise
                content={
                  <>
                    <li>{t("cardThreePlanIncludesOne")}</li>
                    <li>{t("cardThreePlanIncludesTwo")}</li>
                    <li>{t("cardThreePlanIncludesThree")}</li>
                    <li>{t("cardThreePlanIncludesFour")}</li>
                  </>
                }
                price={t("PriceOnRequest")}
              />
            </div>
          </div>
        }
      />

      <FormSection
        id="contatos"
        title={t("titleFaleconosco")}
        subtitle={t("subtitleSesionContatos")}
      />

      <Footer />
      <CookiesNoticeBanner />
    </>
  );
}
