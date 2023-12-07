import React from 'react'
import './Dashboard.css';
import Header from '../Components/header.js'
import Sidenavbar from '../Components/sidenavbar.js';
import './ListofTickets.css';
export default function ListofTickets() {
  
    let Information=[
         {
            "ticketNo": "123456",
            "subject": "Technical issue with website",
            "status": "Open",
            "supportedBy": "John Doe",
            "date": "2023/12/08",
            "rate": "3",
          },
          {
            "ticketNo": "123456",
            "subject": "Technical issue with website",
            "status": "Open",
            "supportedBy": "John Doe",
            "date": "2023/12/08",
            "rate": "3",
          },
          {
            "ticketNo": "123456",
            "subject": "Technical issue with website",
            "status": "Open",
            "supportedBy": "John Doe",
            "date": "2023/12/08",
            "rate": "3",
          },
          {
            "ticketNo": "123456",
            "subject": "Technical issue with website",
            "status": "Open",
            "supportedBy": "John Doe",
            "date": "2023/12/08",
            "rate": "3",
          },
          {
            "ticketNo": "123456",
            "subject": "Technical issue with website",
            "status": "Open",
            "supportedBy": "John Doe",
            "date": "2023/12/08",
            "rate": "3",
          }
    ];
  return (
    <>
    <Header/>
    <div className='Dashboard-container'>
      <Sidenavbar/>
      <div className='TicketBooking'>
        <div style={{textAlign:'center'  }}><p className='main-heading'>Create New Ticket</p></div>
        
        <table  id="customers">
            <tr>
                <th>Ticket No.</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Support by</th>
                <th>Date</th>
                <th>Rate</th>
            </tr>
                {Information.map((curuser,id)=>(
                        <tr key={id} >
                        <th >{curuser.ticketNo}</th>
                        <th>{curuser.subject}</th>
                        <th>{curuser.status}</th>
                        <th>{curuser.supportedBy}</th>
                        <th>{curuser.date}</th>
                        <th>{curuser.rate}</th>
                    </tr>
                ))
            }
        </table>

        </div>
        </div>
    </>
  )
}
