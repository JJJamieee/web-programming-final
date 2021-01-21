import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CupSchema = Schema({
    cupID: { type: Number, required: true, unique: true },
    cupName: { type: String, required: true }, //name, e.g.台大盃男籃、新生盃女籃
    organizer: { type: String, required: true }, //主辦方
    date: { type: String, required: true }, //時間
    place: { type: String, required: true }, //地點
    isFee: {type: Boolean}, //是否有報名費
  //options: [{ type: String, required: true }]
    }, {
  collection: 'Cup',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Cup', CupSchema)

export default exportSchema