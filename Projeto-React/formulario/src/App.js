import React from 'react';
import './App.css';
import './Formulario.css';
import './Main.css';
import Main from './Main';
import Formulario from './Formulario';
import Evento from './Components/Evento';


function App(){
  return(
      <div className='App'>
          <Main />
          <Formulario />
          <Evento />   
      </div>
  );
};

export default App;