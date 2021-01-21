import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import ButtonBase from '@material-ui/core/ButtonBase';
import BasicInfo from './BasicInfo'
import GameResult from './GameResult'
import Announce from './Announce'
import Schedule from './Schedule'

const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
    baseURL: API_ROOT
})


const images = [
    {
        url: 'https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1581678662/DCUK/Content/iStock-959080376.jpg',
        title: 'Basketball',
        width: '30%',
        height: '80%',
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
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
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

export default function Home(props) {
    const classes = useStyles();
    const [page, setPage] = useState(2);
    const [cupsList, setCupsList] = useState([]);
    const [cupBasicInfo, setCupBasicInfo] = useState([]);
    const [cupSchedule, setCupSchedule] = useState([]);
    const [cupResult, setCupResult] = useState([]);
    const [cupAnnounce, setCupAnnounce] = useState([]);

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.root);

    const getCupsList = async () => {
        // TODO : get cups list
        const { data: all_cups } = await instance.get('/getAllCups')
        console.log(all_cups.contents[0]._id)
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

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {page == 2 ?
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={9} lg={12}>
                            <Paper style={{ height: "45px", textAlign: "center" }}>
                                <h1>Sports</h1>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={9} lg={12}>
                            <Paper className={fixedHeightPaper}>
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
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                :
                (page == 3 ?
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={9} lg={12}>
                                <Title>項目</Title>
                                <div className={fixedHeightPaper} style={{ width: "1240px", margin: "auto", marginTop: "100px" }}>
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
                            {props.matchOption == 4 ?
                                <Announce cupAnnounce={cupAnnounce} />
                                :
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        {props.matchOption == 1 ?
                                            <BasicInfo cupBasicInfo={cupBasicInfo} />
                                            :
                                            (props.matchOption == 2 ?
                                                <Schedule cupSchedule={cupSchedule} />
                                                :
                                                <GameResult cupResult={cupResult} />
                                            )
                                        }
                                    </Paper>
                                </Grid>
                            }
                        </Grid>
                    </Container>)
            }

        </main>
    );
}