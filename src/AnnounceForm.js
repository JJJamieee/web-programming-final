import React from 'react';
import { useState, useEffect } from 'react'
import clsx from 'clsx';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Title from './Title';
import TextareaAutosize from 'react-textarea-autosize';

const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
  baseURL: API_ROOT
})

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 420,
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
}));

export default function AnnounceForm(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [announceYear, setAnnounceYear] = useState("")
  const [announceMonth, setAnnounceMonth] = useState("")
  const [announceDate, setAnnounceDate] = useState("")
  const [announceTitle, setAnnounceTitle] = useState("")
  const [announceContent, setAnnounceContent] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dateString = announceYear + "-" + announceMonth + "-" + announceDate
    const transDate = new Date(dateString)

    const { data: success } = await instance.post('/createAnnouncement', {
      'cupID': props.cupNum,
      'title': announceTitle,
      'date': transDate,
      'content': announceContent
    })

    setAnnounceContent("")
    setAnnounceDate("")
    setAnnounceMonth("")
    setAnnounceYear("")
    setAnnounceTitle("")
    alert("新增公告成功！")
  }

  return (
    <Paper className={fixedHeightPaper}>
      <Grid item xs={12}>
        <Title>新增公告</Title>
        <FormControl className={classes.formControl} onSubmit={handleSubmit}>
          <TextField
            required
            id="title"
            name="title"
            label="標題"
            fullWidth
            autoComplete="shipping address-line1"
            style={{ height: 80 }}
            value={announceTitle}
            onInput={e => setAnnounceTitle(e.target.value)}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} style={{ height: 100 }}>
              <TextField
                required
                id="year"
                name="year"
                label="年 YYYY"
                fullWidth
                autoComplete="given-name"
                value={announceYear}
                onInput={e => setAnnounceYear(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="month"
                name="month"
                label="月 MM"
                fullWidth
                autoComplete="given-name"
                value={announceMonth}
                onInput={e => setAnnounceMonth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="day"
                name="day"
                label="日 DD"
                fullWidth
                autoComplete="given-name"
                value={announceDate}
                onInput={e => setAnnounceDate(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextareaAutosize
            minRows={6}
            maxRows={9}
            placeholder="公告內容"
            name="textvalue"
            value={announceContent}
            onInput={e => setAnnounceContent(e.target.value)}
          />

        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
          onClick={handleSubmit}
        >
          確認公告
        </Button>
      </Grid>
    </Paper>
  );
}