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
import EditGame from './EditGame'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    next_button: {
        float: 'right',
    },
});

function createData(date, time, match, place) {
    return { date, time, match, place };
}

const rows = [
    createData('3/4', '12:40', '電機對土木', '新生'),
    createData('3/4', '18:00', '機械對生機', '中央'),
    createData('3/4', '19:00', '資工對日文', '中央'),
];

export default function Schedule(props) {
    const [gameNum, setGameNum] = useState()
    const [changePage, setChagePage] = useState(false)
    const classes = useStyles();
    const handleEdit = () => {
        setChagePage(true)
    }
    return (
        <div>
            {!changePage ?
                <React.Fragment>
                    <h2>賽程</h2>
                    <Button color="primary">Previous</Button>
                    <Button className={classes.next_button} color="primary">Next</Button>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>比賽日期</TableCell>
                                    <TableCell align="right">比賽時間</TableCell>
                                    <TableCell align="right">對戰組合</TableCell>
                                    <TableCell align="right">地點</TableCell>
                                    <TableCell align="right">編輯</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.date}>
                                        <TableCell component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                        <TableCell align="right">{row.match}</TableCell>
                                        <TableCell align="right">{row.place}</TableCell>
                                        <TableCell align="right">
                                            <Button type="button" onClick={handleEdit}>編輯</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </React.Fragment>
                :
                <EditGame />}
        </div>
    );
}
