import React from 'react';
import { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
}));

export default function EditGame() {
    const classes = useStyles();
    const [gameDate, setGameDate] = useState("")
    const [gameTime, setGameTime] = useState("")
    const [gameMatch, setGameMatch] = useState("")
    const [gamePlace, setGamePlace] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Date:', gameDate, 'Time: ', gameTime, 'Match', gameMatch, 'Place', gamePlace);
        // You should see email and password in console.
        // ..code to submit form to backend here...

    }

    return (
        <Grid item xs={12}>
            <Title>比賽資料</Title>
            <FormControl className={classes.formControl} onSubmit={handleSubmit}>
                <TextField
                    required
                    id="date"
                    name="date"
                    label="日期(月/日) XX/XX"
                    fullWidth
                    autoComplete="shipping address-line1"
                    style={{ height: 80 }}
                    value={gameDate}
                    onInput={e => setGameDate(e.target.value)}
                />
                <TextField
                    required
                    id="time"
                    name="time"
                    label="時間 XX:XX"
                    fullWidth
                    autoComplete="shipping address-line1"
                    style={{ height: 80 }}
                    value={gameTime}
                    onInput={e => setGameTime(e.target.value)}
                />
                <TextField
                    required
                    id="match"
                    name="match"
                    label="對戰組合 XX對XX"
                    fullWidth
                    autoComplete="shipping address-line1"
                    style={{ height: 80 }}
                    value={gameMatch}
                    onInput={e => setGameMatch(e.target.value)}
                />
                <TextField
                    required
                    id="place"
                    name="place"
                    label="地點"
                    fullWidth
                    autoComplete="shipping address-line1"
                    style={{ height: 60 }}
                    value={gamePlace}
                    onInput={e => setGamePlace(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                >
                    建立比賽
                        </Button>
            </FormControl>
        </Grid>
    );
}