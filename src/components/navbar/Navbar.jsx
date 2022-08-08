import React from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder="Search ..." />
          <SearchIcon className='icon'/>
        </div>
        <div className='items'>
          <div className='item' >
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneIcon className='icon'/>
            <div className='counter'>
              1
            </div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon'/>
            <div className='counter'>
              5
            </div>
          </div>
          <div className='item'>
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <img 
              src='https://www.w3schools.com/howto/img_avatar.png'
              alt='avatar'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

