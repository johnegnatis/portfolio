import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="p-2 pb-6 bg-white flex justify-end">
            <Navigation/>
        </header>

    )
}

export default Header;