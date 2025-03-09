import { useState } from 'react'
import blackLogo from './assets/img/chefify.png'
import CenterItem from './components/CenterItem'
import './App.css'
function App() {
  return (
    <>
      <div className="App">
      {/* <header>
        <img src={blackLogo}/>
        <input type="text" />
          <ul className='navbar'>
            <li><a href="#">What to cook</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Occasions</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        
      </header> */}

      <main className='container'>
        <CenterItem/>
      </main>

      <footer>
        <p>&copy; 2025 Công ty XYZ. Tất cả các quyền được bảo vệ.</p>
      </footer>
    </div>
    </>
  )
}

export default App
