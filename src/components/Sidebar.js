import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCut,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap"
import PropTypes from "prop-types";


function Sidebar(props) {

    return (
        <Nav
            className={"nav-menu"}
        >
            <div className="nav-menu-items">
                <div className="nav-menu-header">
                    <div className="header-container">
                        <div className="logo-container">
                            <FontAwesomeIcon icon={faCut} className="icon" />
                            <h3>APD</h3>
                        </div>
                    </div>
                </div>
                {props.items.map((item, index) => {
                    return (
                        <Nav.Item
                            key={index}
                            className={item.cName}
                        >
                            <Nav.Link href={item.path}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </div>
        </Nav>
    )
}

Sidebar.propTypes = {
    items: PropTypes.array,
};

export default Sidebar;