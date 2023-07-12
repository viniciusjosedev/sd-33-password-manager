import linkImg from '../images/link-img.svg';
import lockerImg from '../images/locker-img.svg';
import trashImg from '../images/trash-img.svg';
import { PasswordItem } from '../types';

type PasswordCardProps = {
  registeredPassword: PasswordItem,
  hidePassword: boolean,
  remove: (a: PasswordItem) => void,
};

function PasswordCard(props: PasswordCardProps) {
  const { registeredPassword, hidePassword, remove } = props;
  const { url, service, login, password } = registeredPassword;

  return (
    <div className="password-card">
      <div className="card-service">
        <img src={ lockerImg } alt="locker" />
        <a href={ url }>
          { `${service} ` }
          <img src={ linkImg } alt="link" />
        </a>
      </div>
      <div className="card-login">
        <span>Login </span>
        <span>{ login }</span>
      </div>
      <hr />
      <div className="card-password">
        <span>Senha </span>
        <span>{ hidePassword ? '******' : password }</span>
      </div>
      <hr />
      <button
        type="button"
        onClick={ () => remove(registeredPassword) }
        data-testid="remove-btn"
      >
        <img src={ trashImg } alt="Remove password" />
      </button>
    </div>
  );
}

export default PasswordCard;
