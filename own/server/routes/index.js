import cupsRoute from './cups'

const wrap = fn => (...args) => fn(...args).catch(args[2])

function main(app) {
    // app.get('/api/getAllCups', wrap(cupsRoute.GetAllCups))
    // app.get('/api/getBasicInfo', wrap(cupsRoute.GetBasicInfo))
    // app.get('/api/getSchedule', wrap(cupsRoute.GetSchedule))
    // app.get('/api/getResult', wrap(cupsRoute.GetResult))
    // app.get('/api/getAnnounce', wrap(cupsRoute.GetAnnounce))
    // app.post('/api/createGame', wrap(cupsRoute.CreateGame))
}

export default main
