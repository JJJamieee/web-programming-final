import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AnnounceSchema = Schema({
  cupID: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: String, required: true }, //日期
  content: { type: String, required: true }
}, {
  collection: 'Announce',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Announce', AnnounceSchema)

export default exportSchema