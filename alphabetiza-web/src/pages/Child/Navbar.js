import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

export default function Navbar() {

    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="menu__container">

            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu notactive"}>
                <ul className="nav-menu-items"  >
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={"nav-text" + " " + item.cName}>
                                  <Link to={item.path}>
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-title">{item.title}</span>
                                  </Link>
                                </li>
                              );
                        })
                    }
                </ul>
            </nav>

        </div>
    )
}
