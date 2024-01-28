import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/formColor';
import DisplayColors from './components/displayColors';

function App() {
  const [list, setList] = useState(new Values('green').all(10));  

  console.log(list);

  return (
    <div className='App'>
      <FormColor setList={setList} />
      <DisplayColors list={list}/>
    </div>
  )
}

export default App
