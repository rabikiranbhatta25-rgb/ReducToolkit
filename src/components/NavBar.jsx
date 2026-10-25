import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-[var(--c2)] flex text-center justify-between text-white items-center font-semibold"><h1 className="ml-4">Media Search</h1>
        <div className="flex text-center gap-4">
            <Link className="bg-[var(--c4)] text-(--c1) rounded p-2 active:scale-96" to='/'>Search</Link>
        <Link className="bg-[var(--c4)] text-(--c1) rounded p-2 mr-4 acive:scale-96" to='/collection'>Collection</Link>
        </div>
        
        </div>
  )
}

export default NavBar
