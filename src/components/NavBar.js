import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    render() {
        return (
            <>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/category/1">
                    <span>Vinos</span>
                </Link>
                <Link to="/category/2">
                    <span>Espumantes</span>
                </Link>
            </>
        );
    }
}

export default NavBar;