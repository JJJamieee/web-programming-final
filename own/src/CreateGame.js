import React from 'react';
import { useState, useEffect } from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Title from './Title';
import Afterlogin from './Afterlogin';

const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
    baseURL: API_ROOT
})

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
}));

export default function CreateGame(props) {
    const classes = useStyles();
    const [back, setBack] = useState(false)
    const [gameYear, setGameYear] = useState("")
    const [gameMonth, setGameMonth] = useState("")
    const [gameDate, setGameDate] = useState("")
    const [gameTime, setGameTime] = useState("")
    const [gameMatch, setGameMatch] = useState("")
    const [gamePlace, setGamePlace] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dateString = gameYear + "-" + gameMonth + "-" + gameDate
        const transDate = new Date(dateString)

        const { data: success } = await instance.post('/createGame', {
            'cupID': props.cupNum,
            'date': transDate,
            'time': gameTime,
            'match': gameMatch,
            'place': gamePlace,
            'score': " ",
            'result': " "
        })

        setGameYear("")
        setGameMonth("")
        setGameDate("")
        setGameTime("")
        setGameMatch("")
        setGamePlace("")
        alert("新增比賽成功！")
    }

    return (
        <Grid item xs={12}>
            <Title>比賽資料</Title>
            <FormControl className={classes.formControl} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ height: 100 }}>
                        <TextField
                            required
                            id="year"
                            name="year"
                            label="年 YYYY"
                            fullWidth
                            autoComplete="given-name"
                            value={gameYear}
                            onInput={e => setGameYear(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="month"
                            name="month"
                            label="月 MM"
                            fullWidth
                            autoComplete="given-name"
                            value={gameMonth}
                            onInput={e => setGameMonth(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="day"
                            name="day"
                            label="日 DD"
                            fullWidth
                            autoComplete="given-name"
                            value={gameDate}
                            onInput={e => setGameDate(e.target.value)}
                        />
                    </Grid>
                </Grid>
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
                    onClick={handleSubmit}
                >
                    建立比賽
                        </Button>
            </FormControl>
        </Grid>

    );
}