import React, { useState } from 'react';
import Swal from 'sweetalert2';
import closedEye from '../images/eye-closed.svg';
import openEye from '../images/eye-open.svg';
import { PasswordItem } from '../types';
import ShowPasswordButton from './ShowPasswordButton';

type FormProps = {
  setFormVisible: (a: boolean) => void,
  addItem: (a: PasswordItem) => void,
};

function Form(props: FormProps) {
  const { setFormVisible = () => {}, addItem = () => {} } = props;
  const [item, setItem] = useState({
    service: '',
    login: '',
    password: '',
    url: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const MAX_PASSWORD_LENGTH = 16;
  const MIN_PASSWORD_LENGTH = 8;
  const VALID_PASSWORD = 'valid-password-check';
  const INVALID_PASSWORD = 'invalid-password-check';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Swal.fire({
      icon: 'success',
      timer: 1500,
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
    });
    addItem(item);
    setFormVisible(false);
  };

  const fieldsAreNotEmpty = () => {
    const { service, login } = item;
    return (service.length > 0 && login.length > 0);
  };

  const passwordMinLength = () => item.password.length < MIN_PASSWORD_LENGTH;

  const passwordMaxLength = () => item.password.length > MAX_PASSWORD_LENGTH;

  const hasNumbersAndLetters = () => {
    const regex = /^(?=.*?[aA-zZ])(?=.*?[0-9])/i;
    return (regex.test(item.password));
  };

  const hasSpecial = () => {
    const regex = /[^a-zA-Z0-9]/i;
    return (regex.test(item.password));
  };

  const passwordValidation = () => !(
    !passwordMinLength() && !passwordMaxLength()
    && hasNumbersAndLetters() && hasSpecial() && fieldsAreNotEmpty()
  );

  return (
    <div className="form-container">
      <form onSubmit={ handleSubmit }>
        <label htmlFor="service">
          Nome do Serviço
          <input
            className="form-input"
            id="service"
            type="text"
            name="service"
            value={ item.service }
            onChange={ ({ target }) => setItem({ ...item, service: target.value }) }
          />
        </label>
        <div className="credentials-form">
          <label htmlFor="login">
            Login
            <input
              id="login"
              type="text"
              name="login"
              value={ item.login }
              onChange={ ({ target }) => setItem({ ...item, login: target.value }) }
            />
          </label>
          <label htmlFor="password" className="password-label">
            Senha
          </label>
          <input
            id="password"
            className="form-password-input"
            type={ showPassword ? 'text' : 'password' }
            name="password"
            value={ item.password }
            onChange={ ({ target }) => setItem({ ...item, password: target.value }) }
          />
          <ShowPasswordButton
            onClick={ () => setShowPassword(!showPassword) }
            eyeImg={ showPassword ? closedEye : openEye }
          />
        </div>
        <label htmlFor="url">
          URL
          <input
            id="url"
            className="form-input"
            type="text"
            name="url"
            value={ item.url }
            onChange={ ({ target }) => setItem({ ...item, url: target.value }) }
          />
        </label>
        <div className="form-btns-container">
          <button
            className="cancel-btn"
            type="button"
            onClick={ () => setFormVisible(false) }
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={ passwordValidation() }
            className="submit-btn"
          >
            Cadastrar
          </button>
        </div>
      </form>
      <div className="form-validations">
        <span className="validation-title">A senha deve:</span>
        <span
          className={ passwordMinLength() ? INVALID_PASSWORD : VALID_PASSWORD }
        >
          Possuir 8 ou mais caracteres
        </span>
        <span
          className={ passwordMaxLength() ? INVALID_PASSWORD : VALID_PASSWORD }
        >
          Possuir até 16 caracteres
        </span>
        <span
          className={ hasNumbersAndLetters() ? VALID_PASSWORD : INVALID_PASSWORD }
        >
          Possuir letras e números
        </span>
        <span
          className={ hasSpecial() ? VALID_PASSWORD : INVALID_PASSWORD }
        >
          Possuir algum caractere especial
        </span>
      </div>
    </div>
  );
}

export default Form;
