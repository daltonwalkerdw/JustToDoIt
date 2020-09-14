import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>Just To-Do It</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="Todo"></Link>
            </nav>
        </div>
    )
}

export default Header;