import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import './sidenavbar.css';
import { FaTicketAlt } from "react-icons/fa";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Sidenavbar() {
    
    const Navigate=useNavigate();



    useEffect(()=>{
        var docu1 = document.getElementById('icon-1');
        var docu2 = document.getElementById('icon-2');
        var docu3 = document.getElementById('icon-3');
        docu2.style.display='none';
        docu3.style.display='none';
         
    },[]);

  return (
    <div className='side-navbar'>
        <ul>
            <div className='side-navbar-block' onClick={()=>{
                var docu1 = document.getElementById('icon-1');
                var docu2 = document.getElementById('icon-2');
                var docu3 = document.getElementById('icon-3');
                docu1.style.display='inline-block'
                docu2.style.display='none';
                docu3.style.display='none';
                Navigate('/Home');
            }}>
                <span id='icon-1'><IoIosArrowForward /></span>
                <span>
                    <div className='twothings'>
                        <span><MdDashboard /></span>
                        <span>Dashboard</span>
                    </div>
                </span>
            </div>
            <div className='side-navbar-block' onClick={()=>{
                var docu1 = document.getElementById('icon-1');
                var docu2 = document.getElementById('icon-2');
                var docu3 = document.getElementById('icon-3');
                docu1.style.display='none'
                docu2.style.display='inline-block';
                docu3.style.display='none';
                Navigate('/Newticket');
            }}>
                <span id='icon-2'><IoIosArrowForward /></span>
                <span>
                    <div className='twothings'>
                        <span><FaTicketAlt /></span>
                        <span>New Ticket</span>
                    </div>
                </span>
            </div>
            <div className='side-navbar-block' onClick={()=>{
                var docu1 = document.getElementById('icon-1');
                var docu2 = document.getElementById('icon-2');
                var docu3 = document.getElementById('icon-3');
                docu1.style.display='none'
                docu2.style.display='none';
                docu3.style.display='inline-block';
                Navigate('/Listticket');
            }}>
                <span id='icon-3'><IoIosArrowForward  /></span>
                <span>
                    <div className='twothings'>
                        <span><FaTicketAlt /></span>
                        <span>My Ticket</span>
                    </div>
                </span>
            </div>
        </ul>
    </div>
  )
}
