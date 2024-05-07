import './Dashboard.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import Vector from '../../assets/Vector.png'
import VectorWifi from '../../assets/Vector wifi.png'
import Group from '../../assets/Group.png'
import Clock from '../Clock/Clock';
import logo from '../../assets/logo.png'
import Application from '../Apps/Application';
import ContextMenu from '../ContextMenu/ContextMenu';
import { useState } from 'react';


// mui icons are used because didnt get all images in zip folder
const Dashboard = () => {
  const [menuPosition , setMenuPosition] = useState({})
  return (
    <>
      <ContextMenu menuPosition={menuPosition}/>
        <div className='dashboard-page' onClick = {() => setMenuPosition({})} onContextMenu={(e) => {
            e.preventDefault()
            setMenuPosition({left: e.clientX,top : e.clientY})
        }}>
          <nav className='navbar'>
            <div className='nav-logo'>
              <SearchIcon />
              <img src = {Vector} alt = 'vector-logo' />
              <img src = {VectorWifi} alt = 'vector-logo' />
              <NotificationsNoneIcon />
              <img src = {Group} alt = 'group-logo' />
            </div>
          </nav>
          <div><Clock /></div>
          <div><Application /></div>
          <footer className='dashboard-footer'>
            <div className="message-box">
              <h4>Hello!</h4>
              <span>What are you looking for?</span>
            </div>
            <div className='footer-box'>
              <div className='footer-text'><span>File</span></div>
              <div className='footer-logo'>
                <img src = {logo} alt ='logo' />
              </div>
            </div>
          </footer>
        </div>
    </>
  )
}

export default Dashboard