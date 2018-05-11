const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://Jander:123456@ds153775.mlab.com:53775/todo')
