import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><button className="navbutton">Home</button></Link>
            <Link to="/Login"><button className="navbutton">Login</button></Link>
            <Link to="/Products"><button className="navbutton">Products</button></Link>
            <Link to="/About"><button className="navbutton">About Us</button></Link>
            <Link to="/Contact"><button className="navbutton">Contact Us</button></Link>
        </div>
    )
}