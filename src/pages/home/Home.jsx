import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='home-container'>
          <Navbar />
          <div className='widgets'>
            <Widget />
            <Widget />
            <Widget />
            <Widget />
          </div>
        </div>
    </div>
  )
}

export default Home

