import React from 'react';
import { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ButtonBase from '@material-ui/core/ButtonBase';
import CreateGame from './CreateGame'
import Editschedule from './Editschedule'


const images = [
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

const images2 = [
    {
        url: 'https://images.squarespace-cdn.com/content/v1/5a1d923db0786935ac1dd116/1582734318966-7P99AWI7JEM37CF8ZHIG/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/NBA+Game+Courts+UK+Sport+Court+%7C+Basketball+Half+Court.JPG?format=750w',
        title: '創建比賽',
        width: '30%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://i2.wp.com/homesoftherich.net/wp-content/uploads/2014/12/Screen-Shot-2014-12-15-at-2.32.06-AM.png',
        title: '管理盃賽',
        width: '30%',
        height: '100%',
        margin: 'auto',
    },
    {
        url: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
        title: '新增公告',
        width: '30%',
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

const drawerWidth = 0;

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
}));

export default function Afterlogin() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [page, setPage] = useState(1);
    const [cupNum, setCupNum] = useState(1);
    const [funcNum, setFuncNum] = useState(1);

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.root);

    const handleCupNum = (num) => {
        setCupNum(num)
        setPage(2)
    }

    const handleFunction = (func) => {
        setFuncNum(func)
        setPage(3)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        NTU Sports
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={9} lg={12}>
                            {page == 1 ?
                                <div className={fixedHeightPaper} style={{ width: "1240px", margin: "auto", marginTop: "100px" }}>
                                    {images.map((image, index) => (
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
                                :
                                (page == 2 ?
                                    <div className={fixedHeightPaper} style={{ width: "1000px", margin: "auto", marginTop: "100px" }}>
                                        {images2.map((image, index) => (
                                            <ButtonBase
                                                focusRipple
                                                key={image.title}
                                                className={classes.image}
                                                focusVisibleClassName={classes.focusVisible}
                                                onClick={() => handleFunction(index + 1)}
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
                                    :
                                    <Paper className={classes.paper}>
                                        {funcNum == 1 ?
                                            <CreateGame cupNum={cupNum} />
                                            :
                                            <Editschedule cupNum={cupNum} />
                                        }
                                    </Paper>
                                )}
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div >
    );
}