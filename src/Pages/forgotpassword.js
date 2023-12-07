import React from 'react'

import Stack from '@mui/material/Stack';
import './signup.css';
import { useNavigate } from 'react-router';
export default function Helpdesk() {
    const Navigate=useNavigate();
  return (
    <>
    <div className='signup-container1'>
      <div className='signup-container2'>
      <h1>Helpdesk System</h1>
        <div className='signup-content'>
        
      <Stack direction="column" spacing={2}>
      <h3>Don't Worry enter your email and we will send you password link to change password</h3>
       {/* <TextField id="outlined-basic" label="" name='Name' variant="outlined" />
      <TextField id="outlined-basic" label="" variant="outlined" />    */}
      
      <input type='email' name='Name' placeholder='Password'  style={{ width: 350, height: 35 }} />
          <button onClick={()=>{Navigate('/login')}}>Sign up</button>
          <button onClick={()=>{Navigate('/')}}>login in</button>
      </Stack>
      </div>
      </div>
    </div>
    </>
  )
}
