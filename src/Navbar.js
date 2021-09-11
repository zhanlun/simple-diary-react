import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>My Diary</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/new">New</Link>
            </div>
        </nav>
    )
}
