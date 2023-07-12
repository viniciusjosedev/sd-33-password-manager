type ShowPasswordButtonProps = {
  onClick: () => void,
  eyeImg: string,
};

function ShowPasswordButton(props: ShowPasswordButtonProps) {
  const { onClick, eyeImg } = props;

  return (
    <button
      className="show-password-form-btn"
      type="button"
      onClick={ onClick }
      data-testid="show-hide-form-password"
    >
      <img src={ eyeImg } alt="Show password" />
    </button>
  );
}

export default ShowPasswordButton;
