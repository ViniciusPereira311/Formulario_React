import React from 'react';
import './App.css';
import './Formulario.css';
import './Main.css';
import Main from './Main';
import Formulario from './Formulario';
import ComboBox, { SelectEstados } from './ComboBox';

function App(){
  return(
      <div className='App'>
          <Main />
          <Formulario />
      </div>
  );
};

export default App;