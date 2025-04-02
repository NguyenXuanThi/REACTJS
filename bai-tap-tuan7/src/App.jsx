import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image from '/src/img/Image 1858.png'; 
import folder from '/src/img/Folder.png'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
<div class="container">
  <div class="header">
    <h2>Dashbroad</h2>
    <div class = "search">
    <input className='input' type="text" />
    <img src="/src/img/Bell 1.png" alt="" />
    <img src="/src/img/Question 1.png" alt="" />
    <img src="/src/img/Avatar 313.png" alt="" />
    </div>
    </div>
  <div class="menu">
    <img src={image} alt="" />
    <br/>
    
    <a href="#">Dashboard</a>
    <br/>
    <img src={folder} alt="" width= "25" height="25"/>
    <a href="#">Projects</a>
    <br/>
    <a href="#">Teams</a>
    <br/>
    <a href="#">Analytics</a>
    <br/>
    <a href="#">Messsages</a>
    <br/>
    <a href="#">integrations</a>
  </div>
  
  <div class="content">
  <h2>Overview</h2>
  <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.</p>
  </div>
  <div class='footer'>
  <h2>Detailed report</h2>
  <table>
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
    <td>Row 1, Column 3</td>
    <td>Row 1, Column 4</td>
    <td>Row 1, Column 5</td>
    <td>Row 1, Column 6</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
    <td>Row 2, Column 3</td>
    <td>Row 2, Column 4</td>
    <td>Row 2, Column 5</td>
    <td>Row 2, Column 6</td>
  </tr>
  <tr>
    <td>Row 3, Column 1</td>
    <td>Row 3, Column 2</td>
    <td>Row 3, Column 3</td>
    <td>Row 3, Column 4</td>
    <td>Row 3, Column 5</td>
    <td>Row 3, Column 6</td>
  </tr>
  <tr>
    <td>Row 4, Column 1</td>
    <td>Row 4, Column 2</td>
    <td>Row 4, Column 3</td>
    <td>Row 4, Column 4</td>
    <td>Row 4, Column 5</td>
    <td>Row 4, Column 6</td>
  </tr>
  <tr>
    <td>Row 5, Column 1</td>
    <td>Row 5, Column 2</td>
    <td>Row 5, Column 3</td>
    <td>Row 5, Column 4</td>
    <td>Row 5, Column 5</td>
    <td>Row 5, Column 6</td>
  </tr>
  <tr>
    <td>Row 6, Column 1</td>
    <td>Row 6, Column 2</td>
    <td>Row 6, Column 3</td>
    <td>Row 6, Column 4</td>
    <td>Row 6, Column 5</td>
    <td>Row 6, Column 6</td>
  </tr>
  <tr>
    <td>Row 7, Column 1</td>
    <td>Row 7, Column 2</td>
    <td>Row 7, Column 3</td>
    <td>Row 7, Column 4</td>
    <td>Row 7, Column 5</td>
    <td>Row 7, Column 6</td>
  </tr>
</table>

  </div>
</div>

</body>
  )
}

export default App
