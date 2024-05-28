const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('FormData', FormDataSchema);
