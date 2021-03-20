import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import axios from 'axios'
import { useState } from 'react'
const bcrypt = require('bcryptjs')

const API_ROOT = 'http://localhost:4000/api';
const instance = axios.create({
    baseURL: API_ROOT
});

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
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
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}));

function SignUp() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.root);
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpUsername, setSignUpUsername] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")

    const addUser = async (event) => {
        event.preventDefault();

        const { data: success } = await instance.post('/signup', {
            'userName': signUpUsername,
            'hashedPassword': bcrypt.hashSync(signUpPassword, bcrypt.genSaltSync()),
            'email': signUpEmail,
            'isLogin': false
        })

        if (success) {
            alert("註冊成功！");
            setSignUpEmail("");
            setSignUpPassword("");
            setSignUpUsername("");
        }
    }

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
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
        </main>
    )
}

export default SignUp;