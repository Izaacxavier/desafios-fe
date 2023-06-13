import { Container } from "./styles";
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

export function InputPhone({ ...rest }) {
  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState("+55");
  const [countryFlag, setCountryFlag] = useState("https://flagcdn.com/br.svg");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  function getCountryCode(event) {
    // pegando o texto do span
    const textContent = event.target.textContent;
    // transformando em array separado por virgula
    const partsOfCode = textContent.split(",");
    // ddd
    const callingCode = partsOfCode[1];
    // link flags
    const flags = partsOfCode[0];

    setCountryCode(callingCode);
    setCountryFlag(flags);
    setIsOpen(true);

    console.log(callingCode);
    console.log(flags);
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
        <img src={countryFlag} alt={countries} />
        {isOpen ? <CaretDown onClick={handleDropdown}/> : <CaretUp onClick={handleDropdown}/>}
        <div
          className={isOpen ? "dropdown_options" : "dropdown_options is-open"}
        >
          {countries.map((country) => (
            <span key={country.cca2}>
              <span onClick={getCountryCode}>
                {country.flags.svg},{country.idd.root}
                {country.idd.suffixes}
              </span>
              {country.name.common}
            </span>
          ))}
        </div>
      </div>
      <input className="input_code" type="text" value={countryCode} disabled />
      <InputMask mask="(99) 99999-9999" {...rest} />
    </Container>
  );
}

/*  */
