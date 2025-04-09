import { useState } from 'react'
import './App.css'
import image from '/src/img/Image 1858.png'; 
import folder from '/src/img/Folder.png'; 
import Datatable from './components/Datatable';
function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
<div class="container">
  <div class="header">
    <h3>Dashbroad</h3>
    <div class = "search">
      <input className='input' type="text" />
      <img src="/src/img/Bell 1.png" alt="" />
      <img src="/src/img/Question 1.png" alt="" />
      <img src="/src/img/Avatar 313.png" alt="" />
    </div>
  </div>
  
  <div className="menu">
  <img src={image} alt="Logo" />

  <div className="nav-item logo2">
    <img src="/src/img/Squares four 1.png" width="25" height="25" alt="Dashboard" />
    <a href="#" className="linknav">Dashboard</a>
  </div>

  <div className="nav-item">
    <img src={folder} width="25" height="25" alt="Projects" />
    <a href="#" className="linknav">Projects</a>
  </div>

  <div className="nav-item">
    <img src="/src/img/Groups.png" width="25" height="25" alt="Teams" />
    <a href="#" className="linknav">Teams</a>
  </div>

  <div className="nav-item">
    <img src="/src/img/Pie chart.png" width="25" height="25" alt="Analytics" />
    <a href="#" className="linknav">Analytics</a>
  </div>

  <div className="nav-item">
    <img src="/src/img/Chat.png" width="25" height="25" alt="Messages" />
    <a href="#" className="linknav">Messages</a>
  </div>

  <div className="nav-item">
    <img src="/src/img/Code.png" width="25" height="25" alt="Integrations" />
    <a href="#" className="linknav">Integrations</a>
  </div>

  <div className='GroupCha'>
    <img src="/src/img/Group.png" alt="" />
    <h4>V2.0 is avaiable</h4>
    <button>Try now</button>
  </div>
</div>

  
  <div class="content">
    <h4>Overview</h4>
   
  </div>

  <div class='footer'>
    <Datatable />
  </div>
</div>

</body>
  )
}

export default App
