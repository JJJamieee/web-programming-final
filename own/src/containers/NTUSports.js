import React from 'react';
import { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './HomePage';
import AllCups from './AllCups';
import CupPage from './CupPage';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function NTUSports() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleDrawerButton = (returnOpen) => {
        setOpen(returnOpen);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Navbar open={open} handleDrawerButton={(returnOpen) => handleDrawerButton(returnOpen)} />

            {/* set routing */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/basketball/cups" component={AllCups} />
                <Route path="/basketball/cupPage/:cupID?"
                    render={(props) => (
                        <CupPage {...props} open={open} handleDrawerButton={(returnOpen) => handleDrawerButton(returnOpen)} />
                    )} />
                {/* <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/control" component={ControlPage} />
                <Route path="/control/:item?" component={CreateEdit} /> */}
            </Switch>
        </div>
    )
}

export default NTUSports;