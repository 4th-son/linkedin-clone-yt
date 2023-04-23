import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src='https://cdn.pixabay.com/photo/2020/08/28/11/10/ocean-5524264_960_720.jpg' alt='' />
            <Avatar className='sidebar_avatar' />
            <h2>Michael ogozi</h2>
            <h4>michealogozi@gmail.com</h4>
        </div>

            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>who viewed you</p>
                    <p className='sidebar_statNumber'>3,425</p>
                </div>
                    <div className='sidebar_stat'>
                        <p>views on posts</p>
                        <p className='sidebar_statNumber'>2,356</p>
                    </div>
            </div>

            <div className='sidebar_bottom'>
                <p>Recents</p>
                {recentItem ('react js')}
                {recentItem('nigeria elections')}
                {recentItem('tinubu')}
                {recentItem('ellu p 74')}
                {recentItem('obidient')}
            </div>
    </div>
  )
}

export default Sidebar
