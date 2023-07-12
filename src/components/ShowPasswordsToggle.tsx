import './ShowPasswordsToggle.css';

type ShowPasswordsToggleProps = {
  hidePassword: boolean,
  setHidePassword: (a: boolean) => void,
};

function ShowPasswordsToggle(props: ShowPasswordsToggleProps) {
  const { hidePassword, setHidePassword } = props;

  return (
    <label htmlFor="show-password" className="toggle">
      Esconder senhas
      <div className="switch-toggle">
        <input
          type="checkbox"
          id="show-password"
          checked={ hidePassword }
          onChange={ () => setHidePassword(!hidePassword) }
        />
        <span className="slider" />
      </div>
    </label>
  );
}

export default ShowPasswordsToggle;
