const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true
}).then(db => console.log(`Db is connected`))
    .catch(err => console.error(err));