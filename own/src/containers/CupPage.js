import { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import BasicInfo from '../components/BasicInfo';
import Schedule from '../components/Schedule';
import GameResult from '../components/GameResult';
import Announce from '../components/Announce';
import React from 'react';
import { NavLink } from "react-router-dom";

const API_ROOT = 'http://localhost:4000/api';
const instance = axios.create({
    baseURL: API_ROOT
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
}));

function CupPage(props) {
    const [cupBasicInfo, setCupBasicInfo] = useState([]);
    const [cupSchedule, setCupSchedule] = useState([]);
    const [cupResult, setCupResult] = useState([]);
    const [cupAnnounce, setCupAnnounce] = useState([]);
    const [matchOption, setMatchOption] = useState(1);
    const classes = useStyles();

    const handleDrawerClose = () => {
        props.handleDrawerButton(false);
    };

    const handleListButton = (option) => {
        setMatchOption(option);
    }

    const getAllData = (id) => {
        getBasicInfo(id);
        getSchedule(id);
        getResult(id);
        getAnnounce(id);
    }

    const getBasicInfo = async (id) => {
        // TODO : get current cup basic info
        // const { data: info } = await instance.post('/getBasicInfo', curCupID)
        const { data: info } = await instance.get('/getBasicInfo', { params: { id } });
        setCupBasicInfo(info.contents);
    }

    const getSchedule = async (id) => {
        // TODO : get current cup schedule
        const { data: schedule } = await instance.get('/getSchedule', { params: { id } });
        setCupSchedule(schedule.contents);
    }

    const getResult = async (id) => {
        // TODO : get current cup result
        const { data: result } = await instance.get('/getResult', { params: { id } });

        setCupResult(result.contents);
    }

    const getAnnounce = async (id) => {
        // TODO : get current cup announce
        const { data: announce } = await instance.get('/getAnnounce', { params: { id } });

        setCupAnnounce(announce.contents);
    }

    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
                }}
                open={props.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button
                        onClick={() => handleListButton(1)}
                    >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="基本資訊" />
                    </ListItem>
                    <ListItem button
                        onClick={() => handleListButton(2)}
                    >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="賽程" />
                    </ListItem>
                    <ListItem button
                        onClick={() => handleListButton(3)}
                    >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="比賽結果" />
                    </ListItem>
                    <ListItem button
                        onClick={() => handleListButton(4)}
                    >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="公告" />
                    </ListItem>
                    <ListItem button
                        component={NavLink} to="/basketball/cups"
                    >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="返回盃賽列表" />
                    </ListItem>
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {!cupBasicInfo.length ? getAllData(props.match.params.cupID) :
                            (matchOption === 4 ?
                                <Announce cupAnnounce={cupAnnounce} />
                                :
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        {matchOption === 1 ?
                                            <BasicInfo cupBasicInfo={cupBasicInfo} />
                                            :
                                            (matchOption === 2 ?
                                                <Schedule cupSchedule={cupSchedule} />
                                                :
                                                <GameResult cupResult={cupResult} />
                                            )
                                        }
                                    </Paper>
                                </Grid>)
                        }
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default CupPage;