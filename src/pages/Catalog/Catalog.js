import React from 'react';
import {Link, Outlet} from "react-router-dom";

const title = {
    textAlign: "center"
}

const Catalog = () => {
    return (
        <div>
            <h1 style={title}>Каталог</h1>
            <ul>
                <li><Link to="/products/iphone-13-pro">iphone-13-pro</Link></li>
                <li><Link to="/products/iphone-13-pro-max">iphone-13-pro-max</Link></li>
                <li><Link to="/products/iphone-13">iphone-13</Link></li>
                <li><Link to="/products/iphone-12">iphone-12</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Catalog;