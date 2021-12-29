import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Quotes } from './components';
import { getQuote } from './services/QuoteService/QuotesServices';

import narutoImg from './images/naruto.png';
import jutsoSound from './sounds/jutso.mp3';

const audio = new Audio(jutsoSound);


function App() {

  const isMounted = useRef(true);
  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading Quote'
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();

    if (isMounted.current) {
      setQuote(resQuote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className="App">
      <Quotes {...quote} onUpdate={onUpdate} />
      <img className='narutoImg' src={narutoImg} alt="Naruto with a kunai"/>
      
    </div>
  );
}

export default App;
