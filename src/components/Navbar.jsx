import { Link } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../utils/authContext";
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const { logout } = useAuth(); // Destructure logout function from useAuth hook

    const navigate = useNavigate();

    const handleLogout = async (event) => {
        const loggedout = await logout();

        if(loggedout) {
            navigate('/Login'); 
        }

    }
    return (
        <div className="navbar">
            <Link to="/Home"><button className="navbutton">Home</button></Link>
            {/* <Link to="/"><button className="navbutton">Login</button></Link> */}
            <Link to="/Products"><button className="navbutton">Products</button></Link>
            <Link to="/About"><button className="navbutton">About Us</button></Link>
            <Link to="/Contact"><button className="navbutton">Contact Us</button></Link>
            <button className="navbutton" onClick={handleLogout}>Logout</button>
        </div>
    )
}