import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./styles";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

export function InputSelect(value) {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [countryName, setCountryName] = useState("Brazil");
  const [countryFlag, setCountryFlag] = useState("https://flagcdn.com/br.svg");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  function getCountry(event) {
  // pegando o texto do span
  const textContent = event.target.textContent;
  // transformando em array separado por virgula
    const partsOfText = textContent.split(",")
  // pegando nome do país
  const country = partsOfText[0]
  // Pegando flags
  const flags = partsOfText[1]
    
  console.log(country)
  console.log(flags)

  setCountryName(country)
  setCountryFlag(flags)
  setIsOpen(true)

  }

  function handleDropdown() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <Container>
      <div className="select">
        <div className="flags">
        <img src={countryFlag} alt="" />
          <input onClick={handleDropdown} className="input_country" type="text" value={countryName} />
        </div>
        <div className={isOpen ? "dropDown_options" : "dropDown_options is-open"}>
          {countries.map((country) => (
            <span key={country.cca2} onClick={getCountry}>
              <img src={country.flags.svg} alt="" />
              {country.name.common}
              <span onClick={getCountry}>{country.name.common}, {country.flags.svg}</span>
            </span>
          ))}
        </div>
        <div className="button_dropdown" onClick={handleDropdown}>
          {isOpen ? <CaretDown /> : <CaretUp />}
        </div>
      </div>
    </Container>
  );
}
