import React from 'react'
import Header from '../Components/header.js'
import Sidenavbar from '../Components/sidenavbar.js';
import './Dashboard.css'
export default function Dashboard() {
  return (
    <>
    <Header/>
    <div className='Dashboard-container'>
      <Sidenavbar/>
      <div className=''>
        <div style={{textAlign:'center'  }}><p className='main-heading'>Dashboard</p></div>
        <div className='Dashboard-box-container'>
        <div >
            <div className='box' style={{backgroundColor: "blue"}} >
                    <h2>Total Tickets</h2>
                    <p className='ticker'>12</p>
            </div>
        </div>
        <div>
            <div className='box' style={{backgroundColor: "green"}} >
                    <h2>Total Tickets</h2>
                    <p className='ticker'>12</p>
            </div>
        </div>
        <div>
            <div className='box' style={{backgroundColor: "red"}} >
                    <h2>Total Tickets</h2>
                    <p className='ticker'>12</p>
            </div>
        </div>
        <div>
            <div className='box' style={{backgroundColor: "yellow"}} >
                    <h2>Total Tickets</h2>
                    <p className='ticker'>12</p>
            </div>
        </div>
        </div>
        </div>

      </div>
    
    </>
  )
}
