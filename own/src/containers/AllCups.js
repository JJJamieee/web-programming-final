import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '../components/ImageList';

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

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

function AllCups() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={9} lg={12}>
                    <div style={{ height: "45px", textAlign: "center", marginTop: "65px" }}>
                        <h1>盃賽列表</h1>
                    </div>
                </Grid>
                <Grid item xs={12} md={9} lg={12}>
                    <ImageList images={images} type={"cups"} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AllCups;