const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String, required: true },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number },
    message: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', UserSchema)
