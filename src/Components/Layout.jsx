import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Layout = () => {
  
  return (
    <div className='flex w-full h-[100vh]'>
        {/* <div className='w-1/5'>
        <Sidebar/>
        </div>
        */}
       <div className='flex flex-col w-full h-full'>
        <header className=''>
            <Navbar/>
        </header>
       <main className='bg-gray-200 h-full'>
       <Outlet />
       </main>

       </div>
    </div>
  )
}

export default Layout