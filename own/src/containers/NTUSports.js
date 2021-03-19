import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import HomePage from './HomePage';

function NTUSports() {
    return (
        <React.Fragment>
            <Navbar />

            {/* set routing */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route exact path="/cups" component={AllCups} />
                <Route path="/cups/:cupID?" component={cupPage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/control" component={ControlPage} />
                <Route path="/control/:item?" component={CreateEdit} /> */}
            </Switch>
        </React.Fragment>
    )
}

export default NTUSports;