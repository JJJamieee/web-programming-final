import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicInfo(props) {
    const classes = useStyles();
    return (
        <div>
            <h2>基本資訊</h2>
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        <TableRow key={"game-name"}>
                            <TableCell component="th" scope="row">
                                {"盃賽名稱"}
                            </TableCell>
                            <TableCell align="right">{props.cupBasicInfo[0].cupName}</TableCell>
                        </TableRow>
                        <TableRow key={"game-holder"}>
                            <TableCell component="th" scope="row">
                                {"主辦方"}
                            </TableCell>
                            <TableCell align="right">{props.cupBasicInfo[0].organizer}</TableCell>
                        </TableRow>
                        <TableRow key={"game-date"}>
                            <TableCell component="th" scope="row">
                                {"比賽時間"}
                            </TableCell>
                            <TableCell align="right">{props.cupBasicInfo[0].date}</TableCell>
                        </TableRow>
                        <TableRow key={"game-place"}>
                            <TableCell component="th" scope="row">
                                {"比賽地點"}
                            </TableCell>
                            <TableCell align="right">{props.cupBasicInfo[0].place}</TableCell>
                        </TableRow>
                        <TableRow key={"game-fee"}>
                            <TableCell component="th" scope="row">
                                {"是否需報名費"}
                            </TableCell>
                            <TableCell align="right">{
                                props.cupBasicInfo[0].isFee ? "是" : "不是"
                            }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}