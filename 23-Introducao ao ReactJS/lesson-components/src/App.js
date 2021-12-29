import './App.css';
import Button from './components/Button';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function soma (a, b) {
	alert (a+b);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Hello World
          <Button onClick={() => soma(10, 20)} name="Bruno" />
          <ComponentA>
            <ComponentB>
              <Button onClick={() => soma(40, 20)} name="Outro" />
            </ComponentB>
          </ComponentA>
      </header>
    </div>
  );
}

export default App;
