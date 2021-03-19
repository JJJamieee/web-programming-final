import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '../components/ImageList';

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
    fixedHeight: {
        height: 400,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
}));

function HomePage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={9} lg={12}>
                    <div style={{ height: "45px", textAlign: "center", marginTop: "65px" }}>
                        <h1>NTU Sports</h1>
                    </div>
                </Grid>
                <Grid item xs={12} md={9} lg={12}>
                    <ImageList images={images} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage