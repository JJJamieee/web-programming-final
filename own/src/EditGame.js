import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Title from './Title';

const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
    baseURL: API_ROOT
})

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 610,
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
}));

export default function EditGame(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [gameYear, setGameYear] = useState(props.game.date.slice(0, 4))
    const [gameMonth, setGameMonth] = useState(props.game.date.slice(5, 7))
    const [gameDate, setGameDate] = useState(props.game.date.slice(8, 10))
    const [gameTime, setGameTime] = useState(props.game.time)
    const [gameMatch, setGameMatch] = useState(props.game.match)
    const [gamePlace, setGamePlace] = useState(props.game.place)
    const [gamePoint, setGamePoint] = useState(props.game.score)
    const [gameWinner, setGameWinner] = useState(props.game.result)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dateString = gameYear + "-" + gameMonth + "-" + gameDate
        const transDate = new Date(dateString)

        const { data: newInfo } = await instance.post('/editGame', {
            '_id': props.game._id,
            'cupID': props.cupNum,
            'date': transDate,
            'time': gameTime,
            'match': gameMatch,
            'place': gamePlace,
            'score': gamePoint,
            'result': gameWinner
        })

        props.backToSchedule(2)
    }

    return (
        <Paper className={fixedHeightPaper}>
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
                        style={{ height: 80 }}
                        value={gamePlace}
                        onInput={e => setGamePlace(e.target.value)}
                    />
                    <TextField
                        required
                        id="points"
                        name="points"
                        label="比數 XX:XX"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 80 }}
                        value={gamePoint}
                        onInput={e => setGamePoint(e.target.value)}
                    />
                    <TextField
                        required
                        id="vic"
                        name="vic"
                        label="勝隊"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 60 }}
                        value={gameWinner}
                        onInput={e => setGameWinner(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        確認修改
                </Button>
                </FormControl>
            </Grid>
        </Paper>
    );
}