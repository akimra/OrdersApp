import React from "react";
import style from "./Menu.module.scss";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const Menu = () => {
    return (
        <div className={style.menu}>
            <NavLink to="/input">
                <Button>
                    Place order
                </Button>
            </NavLink>
            <NavLink to="/show">
                <Button>
                    Orders list
                </Button>
            </NavLink>
        </div>
    );
};

export default Menu;