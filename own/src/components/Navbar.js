import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import React from 'react';
import { useEffect, useState } from 'react'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    root: {
        display: 'flex',
    },
}));

function Navbar(props) {
    const classes = useStyles();
    const location = useLocation();
    const [showDrawerButton, setShowDrawerButton] = useState(false);
    const [showLogOut, setShowLogOut] = useState(false);
    const history = useHistory();

    const handleDrawerOpen = () => {
        props.handleDrawerButton(true);
    };

    const handleLogOut = () => {
        props.handleAuthed(false);
        history.push("/");
    }

    useEffect(() => {
        if (location.pathname.search('cupPage') != -1)
            setShowDrawerButton(true);
        else
            setShowDrawerButton(false);

        if (location.pathname.search('authed') != -1)
            setShowLogOut(true);
        else
            setShowLogOut(false);
    },
        [location.pathname]
    )

    return (
        <AppBar position="absolute" className={showDrawerButton ?
            clsx(classes.appBar, props.open && classes.appBarShift) :
            clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={showDrawerButton ?
                        clsx(classes.menuButton, props.open && classes.menuButtonHidden) :
                        clsx(classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    <Button component={NavLink} to="/"
                        color="inherit" className={classes.title}>NTU Sports</Button>
                </Typography>
                {!showLogOut ? (<React.Fragment><Button
                    className={classes.margin}
                    color="inherit"
                    component={NavLink} to="/signup"
                >
                    Sign Up
                        </Button>
                    <Button
                        className={classes.margin}
                        color="inherit"
                        component={NavLink} to="/signin"
                    >
                        Sign In
                        </Button></React.Fragment>) :
                    <Button
                        className={classes.margin}
                        color="inherit"
                        onClick={handleLogOut}
                    >
                        Sign Out
                        </Button>}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;