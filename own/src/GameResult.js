import React from 'react';
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    next_button: {
        float: 'right',
    },
});

function createData(date, match, score, result) {
    return { date, match, score, result };
}

const rows = [
    createData('3/4', '電機對土木', '?? : ??', '??勝'),
    createData('3/16', '機械對生機', '?? : ??', '??勝'),
    createData('3/22', '資工對日文', '?? : ??', '??勝'),
];

export default function GameResult(props) {
    const classes = useStyles();

    return (
        <div>
            <h2>比賽結果</h2>
            <Button color="primary">Previous</Button>
            <Button className={classes.next_button} color="primary">Next</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>比賽日期</TableCell>
                            <TableCell align="right">對戰組合</TableCell>
                            <TableCell align="right">比數</TableCell>
                            <TableCell align="right">結果</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.cupResult.map((row) => (
                            <TableRow key={row.date}>
                                <TableCell component="th" scope="row">
                                    {row.date.slice(0, 10)}
                                </TableCell>
                                <TableCell align="right">{row.match}</TableCell>
                                <TableCell align="right">{row.score}</TableCell>
                                <TableCell align="right">{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
