import './App.css';
import{useState} from 'react';
import ColorBlock from './ColorBlock';

function App() {
  let colors = ['violet', 'blue', 'lightblue','green', 'greenyellow', 'yellow', 'orange', 'red',];
  
  let colorMap = colors.map((color, i) => <ColorBlock key={i} color={color} />)
  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
