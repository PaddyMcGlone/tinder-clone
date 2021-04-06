import React from 'react'
import "./Header.css";
import logo from './images/tinder-logo.png';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import Forum from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">            
            <IconButton>
                <PersonIcon fontSize="Large" className="header_icon"/>
            </IconButton>            

            <img 
                className="header__logo"
                src={logo}
                alt="tinder logo"
            />

            <ForumIcon />

        </div>
    )
}

export default Header