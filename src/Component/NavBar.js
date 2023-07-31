import React from 'react'
import { BsFillCartDashFill } from 'react-icons/bs'

const NavBar = () =>{
  return (
    <>
   <nav className="navbar navbar-light bg-dark">
   <a className="navbar-brand" href="#">
      <div className='container'>
         <h3 className='text-white lead p-2'><BsFillCartDashFill className='mr-5' size={30} color={'white'}/>Product cart</h3>
      </div>
   </a>
</nav>
    </>
  )
}

export default NavBar