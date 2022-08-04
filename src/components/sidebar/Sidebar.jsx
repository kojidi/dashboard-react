import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className='logo'><span>Kojidi</span></div>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>

          <p className='title'>LISTS</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <LocalGroceryStoreIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <ListAltIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>

          <p className='title'>USEFUL</p>
          <li>
            <AccountTreeIcon className='icon'/>
            <span>States</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon'/>
            <span>Notifications</span>
          </li>

          <p className='title'>SERVICE</p>
          <li>
            <HealthAndSafetyIcon className='icon'/>
            <span>System Helth</span>
          </li>
          <li>
            <HelpCenterIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>

          <p className='title'>USER</p>
          <li>
            <ManageAccountsIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='color-option'></div>
        <div className='color-option'></div>
      </div>
    </div>
  )
}

export default Sidebar
