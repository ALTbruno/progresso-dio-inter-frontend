import { Fragment } from "react";
import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {

  return(
    <Fragment>
      <h1>Hello World!</h1>
      <ul>
        {/* Usando props.texto
        <Item texto="Item 1" />
        <Item texto="Item 2" />
        <Item texto="Item 3" /> */}

        {/* Usando props.children */}
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>        
      </ul>

      <Card />
    </Fragment>
  )

}

export default App;