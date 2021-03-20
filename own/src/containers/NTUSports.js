import React from 'react';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
import Navbar from '../components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './HomePage';
import AllCups from './AllCups';
import CupPage from './CupPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ControlPage from './ControlPage';
import AuthedCups from './AuthedCups';
import CupCreateEdit from './CupCreateEdit';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function NTUSports() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [authed, setAuthed] = useState(false);
    const history = useHistory();


    const handleDrawerButton = (returnOpen) => {
        setOpen(returnOpen);
    }

    const handleAuthed = (returnAuthed) => {
        setAuthed(returnAuthed);
    }

    useEffect(() => {
        // if isUserLoggedIn turned to true redirect to /control
        if (authed) {
            history.push("/authed/basketball/cups");
        }
    }, [authed]); // triggers when authed changes

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Navbar open={open} authed={authed} handleDrawerButton={(returnOpen) => handleDrawerButton(returnOpen)}
                handleAuthed={(returnAuthed) => handleAuthed(returnAuthed)} />

            {/* set routing */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/basketball/cups" component={AllCups} />
                <Route path="/basketball/cupPage/:cupID?"
                    render={(props) => (
                        <CupPage {...props} open={open} handleDrawerButton={(returnOpen) => handleDrawerButton(returnOpen)} />
                    )} />
                <Route path="/signin"
                    render={(props) => (
                        <SignIn {...props} handleAuthed={(returnAuthed) => handleAuthed(returnAuthed)} />
                    )} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/authed/basketball/cups" component={AuthedCups} />
                <Route exact path="/authed/basketball/cupControl/:cupID?" component={ControlPage} />
                <Route path="/authed/basketball/cupControl/:cupID?/:item?" component={CupCreateEdit} />
            </Switch>
        </div>
    )
}

export default NTUSports;