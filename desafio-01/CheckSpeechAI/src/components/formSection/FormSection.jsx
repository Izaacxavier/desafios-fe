import { CheckFat } from "@phosphor-icons/react";
import { t } from "i18next";
import { useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/input";
import { InputPhone } from "../inputPhone/inputPhone";
import { InputSelect } from "../inputSelect/inputSelect";
import { TextArea } from "../textArea/input";
import { Container, Form } from "./styles";

export function FormSection({id, title, subtitle}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const [inputIsCheked, setInputIsChecked] = useState(false)

  console.log(country)

  function handleButtonForm() {
    event.preventDefault();
    
    setName('')
    setEmail('')
    setTelefone('')
    setCountry('')
    setMessage('')


  }

  function inputCheked (){
    console.log("clicou")
    if(!inputIsCheked){
      setInputIsChecked(true)
    }else{
      setInputIsChecked(false)
    }
    
  }
  return (
    <Container>
      <h2 id={id}>{title}</h2>
      <p>{subtitle}</p>

      <Form onSubmit={handleButtonForm}>
        <div className="group_one">
          <label htmlFor="nome">
            {t('labelName')}
            <Input
              name="nome"
              type="name"
              placeholder={t('placeholderName')}
              value={name}
              onChange={ (event) => setName(event.target.value)}
              
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <Input
              name="email"
              type="email"
              placeholder={t('placeholderEmail')}
              value={email}
              onChange={ (event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="group_two">
          <label htmlFor="phone_number">
          {t('labelPhone')}
            <InputPhone
            placeholder="(xx) xxxxx-xxxx"
              onChange={ (event) => setTelefone(event.target.value)}
            />
          </label>
          <label htmlFor="coutry">
          {t('labelCountry')}
            <InputSelect
              name="coutry"
              type="select"
              onChange={ (event) => setCountry(event.target.value)}
              value={country}

            />
          </label>
        </div>

        <label htmlFor="">{t('labelMessage')}</label>
        <TextArea 
        placeholder={t('placeholderTextarea')}
        value={message}
        onChange={ (event) => setMessage(event.target.value)} 
        />
        <div className="input_terms">
          <div className="input_check">
          <CheckFat className={inputIsCheked ? " " :  "isinvisible"}/>
          </div>
          <input onClick={inputCheked} type="checkBox" name="terms" id="terms" required/>
          <label htmlFor="terms" id="terms">
            <span>{t('PrivacyPolicy')}</span> {t('PrivacyPolicy!')}
          </label>
        </div>

        <div className="button_content">
          <Button title={t("ButtonTitleSend")} type="submit" />
        </div>
      </Form>
    </Container>
  );
}
