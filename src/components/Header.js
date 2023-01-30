import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="header-container-1">
                <Link to="/">
                    <h1>Fake Store</h1>
                </Link>
                <div className="wrapper">
                    <Link to="/new-product">
                        <button className="cart-button">
                            New Product
                        </button>
                    </Link>
                </div>

            </div>
        </header>
    );
}


export default Header;