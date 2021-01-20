import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Title from './Title';

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

export default function EditGame() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Paper className={fixedHeightPaper}>
            <Grid item xs={12}>
                <Title>比賽資料</Title>
                <FormControl className={classes.formControl}>
                    <TextField
                        required
                        id="date"
                        name="date"
                        label="日期(月/日) XX/XX"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 80 }}
                    />
                    <TextField
                        required
                        id="time"
                        name="time"
                        label="時間 XX:XX"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 80 }}
                    />
                    <TextField
                        required
                        id="match"
                        name="match"
                        label="對戰組合 XX對XX"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 80 }}
                    />
                    <TextField
                        required
                        id="place"
                        name="place"
                        label="地點"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 80 }}
                    />
                    <TextField
                        required
                        id="points"
                        name="points"
                        label="比數 XX:XX"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 80 }}
                    />
                    <TextField
                        required
                        id="vic"
                        name="vic"
                        label="勝隊"
                        fullWidth
                        autoComplete="shipping address-line1"
                        style={{ height: 60 }}
                    />
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    確認修改
                </Button>
            </Grid>
        </Paper>
    );
}