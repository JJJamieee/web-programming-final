import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
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

function ImageList(props) {
    const classes = useStyles();
    const [path_list, setPathList] = useState([]);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.root);
    const sports = ['basketball', 'volleyball', 'baseball', 'badminton'];

    const generatePathList = () => {
        var newPathList = [];
        if (props.type === 'sports') {
            sports.map((item, index) => {
                const path = "/" + item + "/cups";
                newPathList.push(path);
            });
        } else if (props.type === "cups") {
            const indexList = ['1', '2', '3', '4'];
            indexList.map(item => {
                const path = "/basketball/cupPage/" + item;
                newPathList.push(path);
            })
        } else if (props.type === "controlCups") {
            const indexList = ['1', '2', '3', '4'];
            indexList.map(item => {
                const path = "/authed/basketball/cupControl/" + item;
                newPathList.push(path);
            })
        } else if (props.type === "controlPage") {
            const indexList = ['createGame', 'editGame', 'createAnnounce'];
            indexList.map(item => {
                const path = "/authed/basketball/cupControl/" + props.cupID + "/" + item;
                newPathList.push(path);
            })
        }
        setPathList(newPathList);
    }

    useEffect(() => {
        generatePathList();
    },
        [props.type],
    );

    return (
        <div className={fixedHeightPaper}>
            {props.images.map((image, index) => (
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
                    component={NavLink} to={!path_list.length ? generatePathList() : path_list[index]}
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
            ))
            }
        </div >
    )
}

export default ImageList;