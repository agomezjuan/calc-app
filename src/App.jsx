// Importaciones
import React, { useState } from 'react';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';

// Generacion de la funcion del componente
const App = () => {
  const [stack, setStack] = useState('');
  return (
    <main className="react-calculator">
      <Result value={stack} />
      <Numbers
        onClickNumber={(number) => {
          console.log('Click in number', number);
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log('Content Clear');
          setStack('');
        }}
        onDelete={() => {
          console.log('Content Delete');
          const newStack = stack.substring(0, stack.length - 1);
          setStack(newStack)
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log('Operation:', operation);
          setStack(`${stack}${operation}`);

        }}
        onClickEqual={(equal) => {
          console.log('Equal:', equal);
          setStack(`${stack}${equal}`);
        }}
      />
    </main>
  );
};
// Exportación
export default App;
