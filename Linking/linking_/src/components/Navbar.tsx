import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <div>
                <h1>Logo</h1>
            </div>

            <div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/portfolio'>Portfolio</Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar