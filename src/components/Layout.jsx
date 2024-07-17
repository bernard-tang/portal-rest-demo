import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import "./Navbar.css"

export function Layout() {

        return (
            <>
                <Navbar/>
                    <main className="mainPanel">
                        <Outlet/>
                    </main>
            </>
        )
}