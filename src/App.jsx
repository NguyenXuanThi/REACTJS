import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/assets/components/Button.jsx'
function App() {
  const [textA, setTextA] = useState(0)
  const [textB, setTextB] = useState(0)
  const [phep, setPhep] = useState('')
  const [xuat, setXuat] = useState('')

  
  function handleClick(){
    if(phep == "+")
      setXuat(parseInt(textA) + parseInt(textB));
    else if(phep == "-")
      setXuat(parseInt(textA) - parseInt(textB));
    else if(phep == "*")
      setXuat(parseInt(textA) * parseInt(textB));
    else 
      setXuat(parseInt(textA) / parseInt(textB));
  }

  function handleChangeA(e){
    setTextA(e.target.type);
  }

  function handleChangeB(e){
    setTextB(e.target.type);
  }

  function handleChangePhep(e){
    setPhep(e.target.value);
  }

  return (
    <>
  <input onChange={handleChangeA}type="text" placeholder='input a' />  
  <input onChange={handleChangeB}type="text" placeholder='input b' />  
  <br />
  <input onChange={handleChangePhep}type="radio" name="group" value="+" /><span>+</span>
  <input onChange={handleChangePhep}type="radio" name="group" value="-" /><span>-</span>
  <input onChange={handleChangePhep}type="radio" name="group" value="*" /><span>*</span> 
  <input onChange={handleChangePhep}type="radio" name="group" value="/" /><span>/</span> 
  <br />
  <button onClick={handleClick}>Tính Toán</button>
  <br />
  <span>{xuat}</span>
    </>
  )
}

export default App
