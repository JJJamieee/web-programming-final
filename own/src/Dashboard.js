import React from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Title from './Title';
import { Button } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import BasicInfo from './BasicInfo'
import GameResult from './GameResult'
import Announce from './Announce'
import Schedule from './Schedule'
import Afterlogin from './Afterlogin'
import SignIn from './LogInF'
import SignUp from './SignUp'
import Cups from './Cups'

const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
    baseURL: API_ROOT
})

const images = [
    {
        url: 'https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1581678662/DCUK/Content/iStock-959080376.jpg',
        title: '籃球',
        width: '20%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://www.starlike.com.tw/wp-content/uploads/2019/05/Mikasa-0223.jpg',
        title: '排球',
        width: '20%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://i0.wp.com/img.globalnewstv.com.tw/uploads/2019/11/20191107104837_34.jpg?resize=935%2C570',
        title: '棒球',
        width: '20%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://s3-ap-northeast-1.amazonaws.com/pro360-page/category_page/badminton.jpg',
        title: '羽球',
        width: '20%',
        height: '100%',
        margin: 'auto',
    }
];

const images2 = [
    {
        url: 'https://lonzowire.usatoday.com/wp-content/uploads/sites/40/2021/01/1295999249.jpg?w=1000&h=600&crop=1',
        title: '新生盃男籃',
        width: '20%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://fivethirtyeight.com/wp-content/uploads/2020/02/GettyImages-1193983474-1-e1581532654728.jpg?w=575',
        title: '新生盃女籃',
        width: '20%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://s3media.247sports.com/Uploads/Assets/58/86/8086058.jpg',
        title: '台大盃男籃',
        width: '20%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2018/09/maya_moore.jpg',
        title: '台大盃女籃',
        width: '20%',
        height: '100%',
        margin: 'auto',
    },
];

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
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
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
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
    fixedHeight: {
        height: 400,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [matchOption, setMatchOption] = useState(1);
    const [page, setPage] = useState(2);
    const [cupsList, setCupsList] = useState([]);
    const [cupBasicInfo, setCupBasicInfo] = useState([]);
    const [cupSchedule, setCupSchedule] = useState([]);
    const [cupResult, setCupResult] = useState([]);
    const [cupAnnounce, setCupAnnounce] = useState([]);
    const [toSignUp, setToSignUp] = useState(false)
    const [toSignIn, setToSignIn] = useState(false)
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpUsername, setSignUpUsername] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.root);

    const handleListButton = (option) => {
        if (option != 5)
            setMatchOption(option);
        else {
            setPage(3)
            setMatchOption(1)
        }
    }

    const getCupsList = async () => {
        // TODO : get cups list
        const { data: all_cups } = await instance.get('/getAllCups')

        setCupsList(all_cups.contents)
    }

    const getBasicInfo = async (id) => {
        // TODO : get current cup basic info
        // const { data: info } = await instance.post('/getBasicInfo', curCupID)
        const { data: info } = await instance.get('/getBasicInfo', { params: { id } })
        setCupBasicInfo(info.contents)
        setPage(1)
    }

    const getSchedule = async (id) => {
        // TODO : get current cup schedule
        const { data: schedule } = await instance.get('/getSchedule', { params: { id } })
        setCupSchedule(schedule.contents)
    }

    const getResult = async (id) => {
        // TODO : get current cup result
        const { data: result } = await instance.get('/getResult', { params: { id } })

        setCupResult(result.contents)
    }

    const getAnnounce = async (id) => {
        // TODO : get current cup announce
        const { data: announce } = await instance.get('/getAnnounce', { params: { id } })

        setCupAnnounce(announce.contents)
    }

    const addUser = async (event) => {
        event.preventDefault();

        const { data: success } = await instance.post('/signup', {
            'userName': signUpUsername,
            'hashedPassword': signUpPassword,
            'email': signUpEmail,
            'isLogin': false
        })

        if (success) {
            setToSignUp(false)
            setToSignIn(true)
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        const { data: isLoginBackEnd } = await instance.post('/login', {
            'userName': username,
            'hashedPassword': password,
        })

        if (isLoginBackEnd.isLogin)
            setIsLogin(isLoginBackEnd.isLogin)
        else {
            alert("密碼錯誤或使用者不存在")
            setPassword("")
        }
    }

    useEffect(() => {
        if (!cupsList.length)
            getCupsList()
    })

    const getAllData = (id) => {
        getCupsList()
        getBasicInfo(id)
        getSchedule(id)
        getResult(id)
        getAnnounce(id)
    }

    const handleCupNum = (cur) => {
        // setCurCup(cur)
        getAllData(cur)
    }

    const handleHomeButton = () => {
        setPage(3)
    }

    const handleBackHome = () => {
        setPage(2)
        setMatchOption(1)
        setToSignUp(false)
        setToSignIn(false)
    }

    const handleSignUp = () => {
        setToSignUp(true)
        setToSignIn(false)
    }

    const handleSignIn = () => {
        setToSignIn(true)
        setToSignUp(false)
    }

    const handleLogout = (logout) => {
        setIsLogin(!logout)
        handleBackHome()
    }

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/controlPage" component={Afterlogin} />
            </Switch>
            {isLogin ?
                <Afterlogin logout={(isLogout) => handleLogout(isLogout)} userName={username} />
                :
                (<div className={classes.root}>
                    <CssBaseline />
                    {page != 1 ?
                        <AppBar position="absolute" className={clsx(classes.appBar)}>
                            <Toolbar className={classes.toolbar}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    <Button onClick={handleBackHome} color="inherit" className={classes.title}>NTU Sports</Button>
                                </Typography>
                                <Button
                                    className={classes.margin}
                                    color="inherit"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                        </Button>
                                <Button
                                    className={classes.margin}
                                    color="inherit"
                                    onClick={handleSignIn}
                                >
                                    Login
                        </Button>
                            </Toolbar>
                        </AppBar>
                        :
                        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                            <Toolbar className={classes.toolbar}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    <Button onClick={handleBackHome} color="inherit" className={classes.title}>NTU Sports</Button>
                                </Typography>
                                <Button
                                    className={classes.margin}
                                    color="inherit"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                        </Button>
                                <Button
                                    className={classes.margin}
                                    color="inherit"
                                    onClick={handleSignIn}
                                >
                                    Login
                        </Button>
                            </Toolbar>
                        </AppBar>
                    }

                    {
                        page != 1 ?
                            <React.Fragment></React.Fragment>
                            :
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                }}
                                open={open}
                            >
                                <div className={classes.toolbarIcon}>
                                    <IconButton onClick={handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <List>
                                    <ListItem button onClick={() => handleListButton(1)}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="基本資訊" />
                                    </ListItem>
                                    <ListItem button onClick={() => handleListButton(2)}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="賽程" />
                                    </ListItem>
                                    <ListItem button onClick={() => handleListButton(3)}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="比賽結果" />
                                    </ListItem>
                                    <ListItem button onClick={() => handleListButton(4)}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="公告" />
                                    </ListItem>
                                    <ListItem button onClick={() => handleListButton(5)}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="返回盃賽列表" />
                                    </ListItem>
                                </List>
                            </Drawer>
                    }
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        {!toSignUp ?
                            !toSignIn ?
                                ((page == 2 ?
                                    <Container maxWidth="lg" className={classes.container}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={9} lg={12}>
                                                <div style={{ height: "45px", textAlign: "center", marginTop: "65px" }}>
                                                    <h1>NTU Sports</h1>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9} lg={12}>
                                                <div className={fixedHeightPaper}>
                                                    {images.map((image) => (
                                                        <ButtonBase
                                                            focusRipple
                                                            key={image.title}
                                                            className={classes.image}
                                                            focusVisibleClassName={classes.focusVisible}
                                                            style={{
                                                                width: image.width,
                                                                height: image.height,
                                                                margin: image.margin,
                                                            }}
                                                            onClick={handleHomeButton}
                                                        >
                                                            <span
                                                                className={classes.imageSrc}
                                                                style={{
                                                                    backgroundImage: `url(${image.url})`,
                                                                }}
                                                            />
                                                            <span className={classes.imageBackdrop} />
                                                            <span className={classes.imageButton}>
                                                                <Typography
                                                                    component="span"
                                                                    variant="subtitle1"
                                                                    color="inherit"
                                                                    className={classes.imageTitle}
                                                                >
                                                                    {image.title}
                                                                    <span className={classes.imageMarked} />
                                                                </Typography>
                                                            </span>
                                                        </ButtonBase>
                                                    ))}
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                    :
                                    (page == 3 ?
                                        <Container maxWidth="lg" className={classes.container}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={9} lg={12}>
                                                    <div style={{ height: "45px", textAlign: "center", marginTop: "65px" }}>
                                                        <h1>項目</h1>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={9} lg={12}>
                                                    <div className={fixedHeightPaper}>
                                                        {images2.map((image, index) => (
                                                            <ButtonBase
                                                                focusRipple
                                                                key={image.title}
                                                                className={classes.image}
                                                                focusVisibleClassName={classes.focusVisible}
                                                                onClick={() => handleCupNum(index + 1)}
                                                                style={{
                                                                    width: image.width,
                                                                    height: image.height,
                                                                    margin: image.margin,
                                                                    //marginTop: image.marginTop,
                                                                }}
                                                            >
                                                                <span
                                                                    className={classes.imageSrc}
                                                                    style={{
                                                                        backgroundImage: `url(${image.url})`,
                                                                    }}
                                                                />
                                                                <span className={classes.imageBackdrop} />
                                                                <span className={classes.imageButton}>
                                                                    <Typography
                                                                        component="span"
                                                                        variant="subtitle1"
                                                                        color="inherit"
                                                                        className={classes.imageTitle}
                                                                    >
                                                                        {image.title}
                                                                        <span className={classes.imageMarked} />
                                                                    </Typography>
                                                                </span>
                                                            </ButtonBase>
                                                        ))}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                        :
                                        <Container maxWidth="lg" className={classes.container}>
                                            <Grid container spacing={3}>
                                                {matchOption == 4 ?
                                                    <Announce cupAnnounce={cupAnnounce} />
                                                    :
                                                    <Grid item xs={12}>
                                                        <Paper className={classes.paper}>
                                                            {matchOption == 1 ?
                                                                <BasicInfo cupBasicInfo={cupBasicInfo} />
                                                                :
                                                                (matchOption == 2 ?
                                                                    <Schedule cupSchedule={cupSchedule} />
                                                                    :
                                                                    <GameResult cupResult={cupResult} />
                                                                )
                                                            }
                                                        </Paper>
                                                    </Grid>
                                                }
                                            </Grid>
                                        </Container>)))
                                :
                                <Container maxWidth="lg" className={classes.container}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={8} lg={12}>
                                            <Paper className={fixedHeightPaper}>
                                                <Grid item xs={12}>

                                                    <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                                                        Sign in
                        </Typography>
                                                    <FormControl className={classes.formControl}>

                                                        <Grid item xs={4} style={{ marginLeft: '400px' }}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="username"
                                                                label="Username"
                                                                name="username"
                                                                autoComplete="username"
                                                                style={{ height: 80 }}
                                                                value={username}
                                                                onInput={e => setUsername(e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4} style={{ marginLeft: '400px' }}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                name="password"
                                                                label="Password"
                                                                type="password"
                                                                id="password"
                                                                autoComplete="current-password"
                                                                style={{ height: 80 }}
                                                                value={password}
                                                                onInput={e => setPassword(e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4} style={{ marginLeft: '400px' }}>
                                                            <Button
                                                                type="submit"
                                                                fullWidth
                                                                variant="contained"
                                                                color="primary"
                                                                className={classes.submit}
                                                                onClick={handleLogin}
                                                            >
                                                                Log In
                              </Button>
                                                        </Grid>
                                                    </FormControl>

                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Container>
                            :
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={8} lg={12}>
                                        <Paper className={fixedHeightPaper}>
                                            <Grid item xs={12}>

                                                <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                                                    Sign up
                        </Typography>
                                                <FormControl className={classes.formControl}>
                                                    <Grid item xs={4} style={{ marginLeft: '400px' }}>
                                                        <TextField
                                                            variant="outlined"
                                                            required
                                                            fullWidth
                                                            id="email"
                                                            label="Email Address"
                                                            name="email"
                                                            autoComplete="email"
                                                            style={{ height: 80 }}
                                                            value={signUpEmail}
                                                            onInput={e => setSignUpEmail(e.target.value)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} style={{ marginLeft: '400px' }}>
                                                        <TextField
                                                            variant="outlined"
                                                            required
                                                            fullWidth
                                                            id="username"
                                                            label="Username"
                                                            name="username"
                                                            autoComplete="username"
                                                            style={{ height: 80 }}
                                                            value={signUpUsername}
                                                            onInput={e => setSignUpUsername(e.target.value)}

                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} style={{ marginLeft: '400px' }}>
                                                        <TextField
                                                            variant="outlined"
                                                            required
                                                            fullWidth
                                                            name="password"
                                                            label="Password"
                                                            type="password"
                                                            id="password"
                                                            autoComplete="current-password"
                                                            style={{ height: 80 }}
                                                            value={signUpPassword}
                                                            onInput={e => setSignUpPassword(e.target.value)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} style={{ marginLeft: '400px' }}>
                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            color="primary"
                                                            className={classes.submit}
                                                            onClick={addUser}
                                                        >
                                                            Sign Up
                              </Button>
                                                    </Grid>
                                                </FormControl>

                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Container>
                        }

                    </main>
                </div >)
            }
        </React.Fragment>
    );
}