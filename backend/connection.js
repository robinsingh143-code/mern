const mongoose = require('mongoose');
const url = "mongodb+srv://robinsingh6997:robinhood143@cluster0.aqsdh.mongodb.net/batch8?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log('connected to the database')
    
}).catch((err) => {
    console.log(err)
    
});

module.exports = mongoose;