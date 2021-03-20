import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CreateGame from '../components/CreateGame';
import Editschedule from '../components/Editschedule';
import AnnounceForm from '../components/AnnounceForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

function CupCreateEdit(props) {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9} lg={12}>
                        <Paper className={classes.paper}>
                            {props.match.params.item === "createGame" ?
                                <CreateGame cupNum={props.match.params.cupID} />
                                :
                                (props.match.params.item === "editGame" ?
                                    <Editschedule cupNum={props.match.params.cupID} />
                                    :
                                    <AnnounceForm cupNum={props.match.params.cupID} />
                                )
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default CupCreateEdit;