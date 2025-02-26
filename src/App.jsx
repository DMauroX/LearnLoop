import { useState } from 'react'

import './App.css'
import IndNum from './indovianIlNumero/IndNum';

function App() {
  


    const [count, setCount] = useState(0);
  
    const increment = () => {
      const sound = new Audio('/link in oublico');

      setCount((prevCount)=>{
        if(prevCount >=10 ){
          console.log("contatore Massimo Raggiunto");
          return(prevCount);
  
        }
        if (prevCount + 1 === 10 ) {
          sound.play();
        }
        return prevCount + 1 ;
        //setCount(count + 1);}

      })
     
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    const reset = () => {
      setCount(0);
    };

    const textColor = count === 0 ? 'red' : 'green';
  
    return (
      <>
      <div>
        <p style={{ color: textColor }}>Contatore: {count}</p>
        <button onClick={decrement}>Diminuisci</button>
        <button onClick={increment} disabled={count >= 10 }>Aumenta</button>
        <button onClick={reset}>Reset</button>
        
      </div>
      <div>
        <button onClick={IndNum}>Pagina</button>
      </div>
      </>
    );
  }
  

  

export default App
