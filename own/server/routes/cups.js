import Cup from '../models/Cup'
import Schedule from '../models/Schedule'
import Announce from '../models/Announce'

exports.GetAllCups = async (req, res) => {
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
}

exports.GetBasicInfo = async (req, res) => {
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
}

exports.GetSchedule = async (req, res) => {
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
}

exports.GetResult = async (req, res) => {
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
}

exports.GetAnnounce = async (req, res) => {
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
}
