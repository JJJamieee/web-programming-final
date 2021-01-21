import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Announce(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <React.Fragment>
            {props.cupAnnounce.map((row) => (
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={fixedHeightPaper}>
                        <h3>{row.title}</h3>
                        <p>{row.date.slice(0, 10)}</p>
                        <p>{row.content}</p>
                    </Paper>
                </Grid>
            ))
            }
        </React.Fragment>
    );
}