import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-dom';
import MainIcon from '../images/user.svg';
import VideoIcon from '../images/github-logo.svg';
import PhotoIcon from '../images/about.svg';
import EditingIcon from '../images/email.svg';
// import ContactIcon from '../images/contact.svg';

import classes from './Navbar.module.css';

const navbar = () => {

    const style = {
        navbar: {
            zIndex: '100',
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
            width: '75px',
            backgroundColor: '#ff4545',
            boxShadow: '2px 0px 2px 1px rgba(0, 0, 0, 0.2)',
            minWidth: '75px',

            '@media (max-width: 900px)': {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: '75px',
            },

            '@media (max-width: 768px)': {
                justifyContent: 'flex-end'
            },
        },

        iconDiv: {
            width: '100%',

            '@media (max-width: 900px)': {
                width: '100px',
                minWidth: '100px',
                height: '100%'
            },

            '@media (max-width: 768px)': {
                display: 'none',
            },
        },

        icon: {
            width: '100%',
            height: '100%'
        },

        navItemCluster: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',

            '@media (max-width: 900px)': {
                display: 'none',
                // flexDirection: 'row',
                // height: '100%',
                // minWidth: '100%'
            }            
        },

        navItemClusterMobile: {
            // width: '100%',
            display: 'none',
            flexDirection: 'column',

            '@media (max-width: 900px)': {
                display: 'flex',
                flexDirection: 'row',
                margin: '0',
                padding: '0',
                // height: '100%',
                // minWidth: '100%'
            }            
        },

        linkStyle: {
            color: '#000    ',
            textDecoration: 'none'
        },

        navItem: {
            height: '75px',
            listStyle: 'none',

            '@media (max-width: 900px)': {
                display: 'flex',
                flexDirection: 'column',
                // textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: '75px'
            }
        },

        navItemIcon: {
            width: '50%',

            '@media (max-width: 900px)': {
                width: '75%'
            }
        },

        endItemDiv: {
            width: '100%',
            height: '75px', //change later

            '@media (max-width: 900px)': {
                display: 'none'
            }
        },

        endItem: {
            width: '100%',
            height: '100%',
            backgroundColor: '#ff4545',
        }
    }

    return (
        <nav style={style.navbar}>
            <div style={style.iconDiv}>
                <Link to="/"><img style={style.icon} src={MainIcon}></img></Link>
            </div>
            <ul style={style.navItemCluster}>
                <Link to="/videography"><li style={style.navItem}><img style={style.navItemIcon} src={VideoIcon}></img></li></Link>
                <Link to="/photography"><li style={style.navItem}><img style={style.navItemIcon} src={PhotoIcon}></img></li></Link>
                <Link to="/editing"><li style={style.navItem}><img style={style.navItemIcon} src={EditingIcon}></img></li></Link>
                {/* <Link to="/contact"><li style={style.navItem}><img style={style.navItemIcon} src={ContactIcon}></img></li></Link> */}
            </ul>
            <ul style={style.navItemClusterMobile}>
                <Link to="/videography" style={style.linkStyle}><li style={style.navItem}>Home</li></Link>
                <Link to="/photography" style={style.linkStyle}><li style={style.navItem}>Projects</li></Link>
                <Link to="/editing" style={style.linkStyle}><li style={style.navItem}>About</li></Link>
                {/* <Link to="/contact" style={style.linkStyle}><li style={style.navItem}>Contact</li></Link> */}
            </ul>
            <div style={style.endItemDiv}>
                <div style={style.endItem}></div>
            </div>
        </nav>
    )
}

export default Radium(navbar);