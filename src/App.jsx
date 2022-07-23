import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
const [onOff, setOnOff] = useState('off')

const toggleOnOff = () => {
  if(onOff === 'off'){
      setOnOff('on')
  }else{
      setOnOff('off')
  }

}

  return (
    <div className="App">
         <article className='countainer'>
         <div className={`circle ${onOff}`}></div>
         <button onClick={toggleOnOff} className='btn'>{onOff}</button>
         </article>
      
    </div>
  )
}

export default App
