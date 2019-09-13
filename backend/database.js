const mongoose = require('mongoose');
console.log(process.env.MONGO)
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true
}).then(db => console.log(`Db is connected`))
    .catch(err => console.error(err));