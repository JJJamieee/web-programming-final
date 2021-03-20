import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '../components/ImageList';

const images = [
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
}));

function ControlPage(props) {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9} lg={12}>
                        <ImageList images={images} type={"controlPage"} cupID={props.match.params.cupID} />
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default ControlPage;