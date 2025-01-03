import React from 'react'
import { Link } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext'

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const setData = () => {
      const data = localStorage.getItem("user-info");
      const userData = JSON.parse(data);
      setUser(userData);
    }
    setData();
  }, [])
  return (
    <div className='flex h-32 items-center justify-between font-semibold'>
      <ul className='flex gap-10 justify-center items-center'>
        <li><h1 className='text-3xl'>NewsNepal</h1></li>
        <li><p>|</p></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        {/* <li><Link to='/comments'>Comments</Link></li> */}
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {/* <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li> */}
      </ul>
      <ul className='flex gap-10 items-center'>
        <li><div className='flex justify-center items-center text-2xl'><MdNotificationsActive /></div></li>
        <li>

          {
            user ?
              <div className='h-12 w-12 rounded-full bg-slate-500'>
                <img src={user?.image} alt="" className='rounded-full' />
              </div> :
              <Link to='/login'>Account</Link>
          }
        </li>
      </ul>
    </div>
  )
}

export default Navbar