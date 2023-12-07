import React from 'react'
import './header.css';
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoExit } from "react-icons/io5";
export default function header() {
  return (
    <div className='header-container'>
        <div className='header-subcontainer'>
            <label>
              <div className='Logo-name'>Helpdesk</div>
            </label>
            <ul>
                <span >
                <IoIosNotifications className='icon-size'/>
                </span>
                <span>
                <IoPerson className='icon-size'/>
                </span>
                <span>
                <IoExit className='icon-size'/>
                </span>
                <span></span>
            </ul>
        </div>
    </div>
  )
}
