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
import Typography from '@material-ui/core/Typography';
import { ArrowRight } from '@material-ui/icons';
import SortSchedule from './SortSchedule'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    next_button: {
        float: 'right',
    },
    title: {
        flexGrow: 1,
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
    const [curPage, setCurPage] = useState(0);
    const [pageNum, setPageNum] = useState(0);
    const [sortDateList, setSortDateList] = useState([])
    const classes = useStyles();

    useEffect(() => {
        if (!sortDateList.length) {
            const dayList = []
            props.cupSchedule.map((row) => (
                dayList.push(row.date.slice(0, 10))
            ))
            const daySet = new Set(dayList);
            const uniDateList = Array.from(daySet)
            setPageNum(uniDateList.length)
            setSortDateList(SortSchedule(uniDateList))
        }
    })

    const handlePreviost = () => {
        if (curPage > 0)
            setCurPage((curPage) => curPage - 1)
    }

    const handleNext = () => {
        if (curPage < pageNum - 1)
            setCurPage((curPage) => curPage + 1)
    }

    return (
        <div>
            <h2>賽程</h2>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} style={{ textAlign: "center" }}>
                {sortDateList[curPage]}
            </Typography>
            <Button color="primary" onClick={handlePreviost}>Previous</Button>
            <Button className={classes.next_button} color="primary" onClick={handleNext}>Next</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>比賽日期</TableCell>
                            <TableCell align="right">比賽時間</TableCell>
                            <TableCell align="right">對戰組合</TableCell>
                            <TableCell align="right">地點</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.cupSchedule.map((row, index) => (
                            row.date.slice(0, 10) === sortDateList[curPage] ?
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {row.date.slice(0, 10)}
                                    </TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="right">{row.match}</TableCell>
                                    <TableCell align="right">{row.place}</TableCell>
                                </TableRow>
                                :
                                <React.Fragment></React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}
