import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Widget = () => {
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>USERS</span>
            <span className='counter'>21354</span>
            <span className='link'>See all users</span>
        </div>
        <div className='right'>
            <div className='percentage'>
                <KeyboardArrowUpIcon />
                20%
            </div>
            <PersonOutlinedIcon />
        </div>
    </div>
  )
}

export default Widget