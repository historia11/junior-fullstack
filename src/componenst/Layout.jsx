import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <nav className='flex flex-wrap items-center py-3  mb-5 '>
        <div className='mx-auto'>
        <ul className='flex'>
          <li className='nav-item'>
            <Link to="/"
            className='px-3 py-2 flex items-center text-lg leading-snug hover:opacity-75 to-blue-300'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="Comments.jsx"
            className='px-3 py-2 flex items-center text-lg leading-snug hover:opacity-75'>Comments</Link>
          </li>
          <li className='nav-item'>
            <Link to="FruitsList.jsx"
            className='px-3 py-2 flex items-center text-lg leading-snug hover:opacity-75'>FruitList</Link>
          </li>
        </ul>
        </div>

      </nav>
        <Outlet/>
   </>
  )
}

export default Layout