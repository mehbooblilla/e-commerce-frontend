import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
const Layout = () => {
  
  return (
    <div className='flex w-full h-[100vh]'>
        <div className='w-1/5'>
        <Sidebar/>
        </div>
       
       <div className='flex flex-col w-4/5 h-full'>
        <header className='bg-gray-500 h-24'>
            header
        </header>
       <main className='bg-red-400 h-full'>
       <Outlet />
       </main>

       </div>
    </div>
  )
}

export default Layout