import React, { useState } from "react";
import {
  Form,
  Label,
  TermsLayout,
  Button,
  ButtonLayout,
  MessageSuccess,
  MessageError,
} from "./elements/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/Input";

const App = () => {
  const [user, changeUser] = useState({ field: "", valid: null });
  const [name, changeName] = useState({ field: "", valid: null });
  const [password, changePassword] = useState({ field: "", valid: null });
  const [password2, changePassword2] = useState({ field: "", valid: null });
  const [email, changeEmail] = useState({ field: "", valid: null });
  const [phone, changePhone] = useState({ field: "", valid: null });
  const [terms, changeTerms] = useState(false);
  const [formValid, changeFormValid] = useState(null);

  const expressions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const legends = {
    user:
      "El usuario tiene que ser de 4 a 16 digitos y solo pueden contener numeros, letras y guion bajo",
    email:
      "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.",
    password: "La contraseña tiene que ser de 4 a 12 dígitos. ",
    password2: "Ambas contraseñas deben ser iguales.",
    name:
      "El nombre tiene que ser de 2 a 40 digitos y solo pueden contener letras y espacios, asimismo pueden llevar acentos",
    phone:
      "El telefono solo puede contener numeros y el maximo son 14 dígitos.",
  };

  const validRepeatPassword = () => {
    if (password.field.length === 0) {
      return;
    }
    if (password.field !== password2.field) {
      changePassword2((prevState) => {
        return { ...prevState, valid: "false" };
      });
      return;
    }
    changePassword2((prevState) => {
      return { ...prevState, valid: "true" };
    });
  };

  const onChangeTerms = (e) => {
    changeTerms(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const fields = [user, name, password, password2, email, phone];
    const changes = [
      changeUser,
      changeName,
      changePassword,
      changePassword2,
      changeEmail,
      changePhone
    ];
    const valid =
      fields.filter((line) => line.valid).length === fields.length && terms;
    changeFormValid(valid);

    if (valid) {
      changes.map((change) => change({ field: "", valid: null }));
      changeTerms(false);
    }
  };

  return (
    <main>
      <Form onSubmit={onSubmit}>
        <Input
          status={user}
          changeStatus={changeUser}
          id="alan123"
          label="Usuario"
          placeholder="Ingrese su usuario"
          legend={legends.user}
          regex={expressions.user}
        />
        <Input
          status={name}
          changeStatus={changeName}
          id="name"
          label="Nombre"
          placeholder="Alan"
          legend={legends.name}
          regex={expressions.name}
        />

        <Input
          status={password}
          changeStatus={changePassword}
          id="password"
          type="password"
          label="Contraseña"
          placeholder=""
          legend={legends.password}
          regex={expressions.password}
        />
        <Input
          status={password2}
          changeStatus={changePassword2}
          id="password2"
          type="password"
          label="Repita contraseña"
          placeholder=""
          legend={legends.password2}
          validRepeatPassword={validRepeatPassword}
        />

        <Input
          status={email}
          changeStatus={changeEmail}
          id="email"
          type="email"
          label="Correo"
          placeholder="alan@corre.com"
          legend={legends.email}
          regex={expressions.email}
        />
        <Input
          status={phone}
          changeStatus={changePhone}
          id="phone"
          type="tel"
          label="Telefono"
          placeholder="987654321"
          legend={legends.phone}
          regex={expressions.phone}
        />

        <TermsLayout>
          <Label>
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={terms}
              onChange={onChangeTerms}
            />
            Acepto los Terminos y Condiciones
          </Label>
        </TermsLayout>
        {formValid === false && (
          <MessageError>
            <div>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b> Error: </b> Por favor rellene correctamente el formulario
            </div>
          </MessageError>
        )}
        <ButtonLayout>
          <Button type="submit">Enviar</Button>
          {formValid === true && (
            <MessageSuccess valid={formValid}>
              Formulario enviado exitosamente
            </MessageSuccess>
          )}
        </ButtonLayout>
      </Form>
    </main>
  );
};
export default App;
