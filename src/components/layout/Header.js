import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#" >
                    <p>COSMOS</p>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-dashboard"></i>Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-users"></i>Validators</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-dashboard"></i>Blocks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-dashboard"></i>Proposals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-dashboard"></i>Ibc relayers</a>
                    </li>   
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-database"></i>Assets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-dashboard"></i>Parameters</a>
                    </li>
                    <li className="nav-item">
                        <img src='../../Notification.png' />
                    </li>   
                    <li className="nav-item">
                        <img src='../../search.png' />
                    </li>
                    <li className="nav-item">
                        <img src='../../search.png' />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;