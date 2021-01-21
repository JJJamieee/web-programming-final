import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = Schema({
    userName: { type: String, required: true },
    hashPassword: { type: String, required: true },
    email: { type: String, required: true },
    isLogin: { type: Boolean, required: true }
    }, {
  collection: 'User',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('User', UserSchema)

export default exportSchema