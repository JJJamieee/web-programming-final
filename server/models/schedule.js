// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ScheduleSchema = Schema({
  cupID: { type: Number, required: true },
  date: { type: Date, required: true }, //日期
  time: { type: String, required: true }, //時間
  match: { type: String, required: true }, //對戰組合
  place: { type: String, required: true }, //地點
  score: { type: String, required: true }, //比數
  result: { type: String, required: true } //勝負
  //options: [{ type: String, required: true }]
}, {
  collection: 'Schedule',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Schedule', ScheduleSchema)

// export default exportSchema
module.exports = exportSchema