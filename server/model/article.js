let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Blog', {
  useNewUrlParser: true
});

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  introduce: {
    type: String,
    required: true,
    default: ''
  },
  content_md: {
    type: String
  },
  content_html: {
    type: String
  },
  date: {
    type: Date
  }
});

module.exports = mongoose.model('Article', articleSchema);
