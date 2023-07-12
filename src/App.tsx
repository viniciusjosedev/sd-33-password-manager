import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import NoPasswordList from './components/NoPasswordList';
import PasswordList from './components/PasswordList';
import ShowPasswordsToggle from './components/ShowPasswordsToggle';
import { PasswordItem } from './types';

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [items, setItems] = useState<PasswordItem[]>([]);

  const addItem = (newItem: PasswordItem) => setItems([...items, newItem]);

  const removePassword = (toRemovePassword: PasswordItem) => {
    const newList = items.filter((password) => password !== toRemovePassword);
    setItems(newList);
  };

  return (
    <div className="app">
      <Header />
      {
        formVisible ? (
          <Form setFormVisible={ setFormVisible } addItem={ addItem } />
        ) : (
          <button
            className="register-btn"
            type="button"
            onClick={ () => setFormVisible(!formVisible) }
          >
            Cadastrar nova senha
          </button>
        )
      }
      <hr
        style={ {
          backgroundColor: '#CACACA',
          color: '#CACACA',
          borderColor: '#CACACA',
          height: '1px',
          width: '20vw',
        } }
      />
      <div className="passwords-container">
        <ShowPasswordsToggle
          hidePassword={ hidePassword }
          setHidePassword={ setHidePassword }
        />
        {
          items.length > 0 ? (
            <PasswordList
              items={ items }
              remove={ removePassword }
              hide={ hidePassword }
            />
          ) : <NoPasswordList />
        }
      </div>
    </div>
  );
}

export default App;
