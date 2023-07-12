import locker from '../images/locker-img.svg';

function NoPasswordList() {
  return (
    <div className="no-password-list">
      <h3>Nenhuma senha cadastrada</h3>
      <img src={ locker } alt="no password registered" />
    </div>
  );
}

export default NoPasswordList;
