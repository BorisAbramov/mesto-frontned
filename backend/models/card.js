const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      // eslint-disable-next-line no-useless-escape
      validator: (v) => /^https?:\/\/(www\.)?[a-z0-9-._~:\/?#[\]@!$&'()*+,;=]*#?/i.test(v),
      message: 'Указан невалидный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
});

module.exports = mongoose.model('card', cardSchema);
