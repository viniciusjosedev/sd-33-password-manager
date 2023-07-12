import { PasswordItem } from '../types';
import PasswordCard from './PasswordCard';

type PasswordListProps = {
  items: PasswordItem[],
  hide: boolean,
  remove: (a: PasswordItem) => void,
};

function PasswordList(props: PasswordListProps) {
  const { items, remove, hide } = props;

  return (
    <div className="password-list">
      {
        items.map((password, index) => (
          <div key={ index }>
            <PasswordCard
              registeredPassword={ password }
              hidePassword={ hide }
              remove={ remove }
            />
          </div>
        ))
      }
    </div>
  );
}

export default PasswordList;
