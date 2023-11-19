import { Avatar } from '@mui/material';
import React from 'react'
import InputOption from './InputOption';
import './Post.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post_header'>
         <Avatar className='post_avatar'/>
         <div className='post_info'>
            <h2>{name}</h2>
            <p>{description}</p>
         </div>
        </div> 

             <div className='post_body'>
                <p>{message}</p>
                </div>
                <div className='post_buttons'>
                    <InputOption Icon={ThumbUpOffAltIcon} title='Like'
                    color='gray'/>
                    <InputOption Icon={ChatOutlinedIcon} title='Comment'
                    color='gray'/>
                    <InputOption Icon={AutorenewOutlinedIcon} title='Repost'
                    color='gray'/>
                    <InputOption Icon={SendOutlinedIcon} title='Send'
                    color='gray'/>
                </div>
    </div>

  )
}

export default Post
