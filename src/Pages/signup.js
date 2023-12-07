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
         
       {/* <TextField id="outlined-basic" label="" name='Name' variant="outlined" />
      <TextField id="outlined-basic" label="" variant="outlined" />    */}
      <input type='text' name='Name' placeholder='UserName' style={{ width: 350, height: 35 }}/>
      <input type='text' name='Name' placeholder='Password'   style={{ width: 350, height: 35 }} />
          <button onClick={()=>{
            Navigate('/Home');
          }}>Sign </button>
          <div style={{ marginTop:35 }}>
          <span className='span-left'  onClick={()=>{Navigate('/forgotpassword')}}>Forget Password</span>
            <span className='span-right' onClick={()=>{Navigate('/login')}}>Sign in</span>
          </div>
      </Stack>
      </div>
      </div>
    </div>
    </>
  )
}
