import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <div>
            <Link to ="/">Home</Link>
            <Link to = "/Contact">contact</Link>
            <Link to = "/About">About</Link>
        </div>
    )
}
