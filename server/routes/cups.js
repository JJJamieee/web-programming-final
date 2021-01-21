// import express from 'express'
// import Cup from '../models/Cup'
// import Schedule from '../models/Schedule'
// import Announce from '../models/Announce'
// import User from '../models/user'
const express = require('express')
const Cup = require('../models/cup')
const Schedule = require('../models/schedule')
const Announce = require('../models/announce')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get('/getAllCups', async (req, res) => {
    //TODO : get all cups to form the cups list
    const all_q = await Cup.find()

    if (!all_q) {
        const res_obj = {
            message: 'error',
            contents: []
        }
        res.status(403).send(res_obj)
    } else {
        const res_obj = {
            message: 'success',
            contents: all_q
        }
        res.status(200).send(res_obj)
    }
})

router.get('/getBasicInfo', async (req, res) => {
    //TODO : use the cupID to get its basic info
    console.log(req.query)
    const basic_info = await Cup.find({ cupID: req.query.id })
    console.log(basic_info)
    if (!basic_info) {
        const res_obj = {
            message: 'error',
            contents: []
        }
        res.status(403).send(res_obj)
    } else {
        const res_obj = {
            message: 'success',
            contents: basic_info
        }
        res.status(200).send(res_obj)
    }
})

router.get('/getSchedule', async (req, res) => {
    //TODO : use the cupID to get its schedule
    const schedule = await Schedule.find({ cupID: req.query.id })

    if (!schedule) {
        const res_obj = {
            message: 'error',
            contents: []
        }
        res.status(403).send(res_obj)
    } else {
        const res_obj = {
            message: 'success',
            contents: schedule
        }
        res.status(200).send(res_obj)
    }
})

router.get('/getResult', async (req, res) => {
    //TODO : use the cupID to get its result
    const result = await Schedule.find({ cupID: req.query.id })

    if (!result) {
        const res_obj = {
            message: 'error',
            contents: []
        }
        res.status(403).send(res_obj)
    } else {
        const res_obj = {
            message: 'success',
            contents: result
        }
        res.status(200).send(res_obj)
    }
})

router.get('/getAnnounce', async (req, res) => {
    //TODO : use the cupID to get its announcement
    const announce = await Announce.find({ cupID: req.query.id })

    if (!announce) {
        const res_obj = {
            message: 'error',
            contents: []
        }
        res.status(403).send(res_obj)
    } else {
        const res_obj = {
            message: 'success',
            contents: announce
        }
        res.status(200).send(res_obj)
    }
})

router.post('/createGame', async (req, res) => {
    const gameInfo = req.body

    const success = await Schedule.create(gameInfo)

    res.status(200).send(success)
})

router.post('/editGame', async (req, res) => {
    const editGameInfo = req.body

    const gameInfo = await Schedule.findOne({ _id: editGameInfo._id }, function (err, game) {
        if (!err) {
            if (game) {
                game.date = editGameInfo.date
                game.time = editGameInfo.time
                game.match = editGameInfo.match
                game.place = editGameInfo.place
                game.score = editGameInfo.score
                game.result = editGameInfo.result
                game.save()
            }
        }
    });

    res.status(200).send(gameInfo)
})

router.post('/createAnnouncement', async (req, res) => {
    const newAnnounce = req.body

    const success = await Announce.create(newAnnounce)

    res.status(200).send(success)
})

router.post('/signup', async (req, res) => {
    const userInfo = req.body

    const newUser = await User.create({
        userName: userInfo.userName,
        hashPassword: bcrypt.hashSync(userInfo.hashedPassword, bcrypt.genSaltSync()),
        email: userInfo.email,
        isLogin: userInfo.isLogin,
    });
    console.log(newUser)
    //sending back the newUser to the frontEND
    res.json(newUser);
})

router.post('/login', async (req, res) => {
    // these emailFromLoginForm and passwordFromLoginForm are coming from your frontend
    // const { nameFromLoginForm, passwordFromLoginForm } = req.body;
    const userInfo = req.body;

    //find a user from the database with your nameFromLoginForm
    const existingUser = await User.findOne({ userName: userInfo.userName }, function (err, user) {
        if (!err) {
            if (user) {
                user.isLogin = true
                user.save()
            }
        }
    });

    //if no user found
    if (!existingUser) return res.json({ isLogin: false })

    //if the user is found, I mean if the user is on our database, compare the passwordFromLoginForm with the hashedPassword on our database to see if the passwords match (bcrypt will do this for us)
    const doesPasswordMatch = bcrypt.compareSync(userInfo.hashedPassword, existingUser.hashPassword); //it wii give you a boolean, so the value of doesPasswordMatch will be a boolean
    console.log(doesPasswordMatch)
    //if the passwords do not match
    // if (!doesPasswordMatch) return res.json({ isLogin: false });

    //if the passwords match, send back the existingUser to the frontEND
    // User.updateOne
    // existingUser.isLogin = true;
    // existingUser.save(callback);
    res.json({ isLogin: doesPasswordMatch });
})

router.post('/setUserLogout', async (req, res) => {
    // these emailFromLoginForm and passwordFromLoginForm are coming from your frontend
    // const { nameFromLoginForm, passwordFromLoginForm } = req.body;
    const userName = req.body.userName;

    //find a user from the database with your nameFromLoginForm
    const existingUser = await User.findOne({ userName: userName }, function (err, user) {
        if (!err) {
            if (user) {
                user.isLogin = false
                user.save()
            }
        }
    });

    res.json({ success: true });
})

// export default router
module.exports = router