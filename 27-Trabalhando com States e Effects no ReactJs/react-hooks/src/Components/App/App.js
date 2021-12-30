import './App.css'
import Counter from '../Counter/Counter';
import SmartCounter from '../Counter2/Counter2';
import Counter3 from '../Counter3/Counter3';

function App() {
  return (
    <div className='app-div'>
      <h1>Hello World</h1>
      <div className='contadores'>
        <Counter />
        <SmartCounter />
      </div>
      <Counter3 />
    </div>
  );
}

export default App;
