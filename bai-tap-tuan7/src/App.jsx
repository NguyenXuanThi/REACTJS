import { Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import image from '/src/img/Image 1858.png'; 
import folder from '/src/img/Folder.png'; 
import Datatable from './components/Datatable';
import Overview from './components/Overview';

import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h3>Dashboard</h3>
        <div className="search">
          <input className="input" type="text" />
          <img src="/src/img/Bell 1.png" alt="" />
          <img src="/src/img/Question 1.png" alt="" />
          <img src="/src/img/Avatar 313.png" alt="" />
        </div>
      </div>

      <div className="menu">
        <img src={image} alt="Logo" />
        <NavLink to="/" className="nav-item logo2">
          <img src="/src/img/Squares four 1.png" width="25" height="25" alt="Dashboard" />
          <span className="linknav">Dashboard</span>
        </NavLink>
        <NavLink to="/projects" className="nav-item">
          <img src={folder} width="25" height="25" alt="Projects" />
          <span className="linknav">Projects</span>
        </NavLink>
        <NavLink to="/teams" className="nav-item">
          <img src="/src/img/Groups.png" width="25" height="25" alt="Teams" />
          <span className="linknav">Teams</span>
        </NavLink>
        <NavLink to="/analytics" className="nav-item">
          <img src="/src/img/Pie chart.png" width="25" height="25" alt="Analytics" />
          <span className="linknav">Analytics</span>
        </NavLink>
        <NavLink to="/messages" className="nav-item">
          <img src="/src/img/Chat.png" width="25" height="25" alt="Messages" />
          <span className="linknav">Messages</span>
        </NavLink>
        <NavLink to="/integrations" className="nav-item">
          <img src="/src/img/Code.png" width="25" height="25" alt="Integrations" />
          <span className="linknav">Integrations</span>
        </NavLink>
        <div className='GroupCha'>
          <img src="/src/img/Group.png" alt="" />
          <h4>V2.0 is available</h4>
          <button>Try now</button>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<><Overview /><br /><Datatable /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
