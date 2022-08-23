const mongoose = require(mongoose)

const mongoConfig = 'mongodb+srv://Dires00:DiresXpg@cluster0.hwqx3jj.mongodb.net/?retryWrites=true&w=majority'

const connection = mongoose.connect(mongoConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection