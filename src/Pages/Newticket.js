import React from 'react'
import Header from '../Components/header.js'
import Sidenavbar from '../Components/sidenavbar.js';
import './Dashboard.css';
import './Newticket.css';
export default function Newticket() {
  return (
    <>
    <Header/>
    <div className='Dashboard-container'>
      <Sidenavbar/>
      <div className='Newticket'>
        <div style={{textAlign:'center'  }}><p className='main-heading'>Create New Ticket</p></div>
        <div className='inputbox-main'>
        <div className='inputbox-1'>
          
                <div className='inputbox-inside'>
                    <label for="fname">Ticket No  </label>
                    <input type="text" id="fname" name="fname" style={{margin: "10px" }}/>
                    <br/>
                    <label for="fname">Name</label>
                    <input type="text" id="fname" name="fname" style={{marginLeft: "39px" }}  />
                    
                </div>
                <div className='inputbox-inside'>
                    <label for="fname">Date:</label>
                    <input type="text" id="fname" name="fname" style={{marginLeft: "48px" , marginTop:"10px", marginBottom:"10px"}}/>
                    <br/>
                    <label for="fname">Department</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                
        </div>
        <br/>
        
                <label for="fname">Subject</label>
                <br/>
                <input type="text" id="fname" name="fname" style={{margin: "10px" , width:"90%" }}   />
                <br/>
                <div className='inputbox-1'>
          
                <div className='inputbox-inside'>
                    <label for="fname">Category  </label>
                    <br/>
                    <input type="text" id="fname" name="fname" style={{marginLeft:"10px"}} />
                    <br/>
                    <label for="fname">Type</label>
                    <br/>
                    <input type="text" id="fname" name="fname"  style={{marginLeft:"10px"}} />
                    <br/>
                    <label for="fname">Priority</label>
                    <br/>
                    <input type="text" id="fname" name="fname"   style={{marginLeft:"10px"}}/>
                    
                </div>
                <div className='inputbox-inside'>
                    <label for="fname">Description</label>
                    <br/>
                    <textarea rows="5" cols="50"/>                    
                </div>
                
        </div>
        </div>
        
        <div style={{textAlign:'center'  }}>
          <button>Submit</button>
        </div>
        </div>
        </div>
    </>
  )
}
