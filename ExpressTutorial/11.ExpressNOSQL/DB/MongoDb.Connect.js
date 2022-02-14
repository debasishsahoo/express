const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config();
const dbuser = process.env.DBUSER
const dbpassword = process.env.DBPASS
const dbname = process.env.DBNAME




const url = `mongodb+srv://${dbuser}:${dbpassword}@crudapp.dusom.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, })
    .then(() => {
        console.log("NODEJS TO MONGODB Connection Established!");
    })
    .catch((err) => {
        console.log(err);
        console.log("Error in DB Connection:" + JSON.stringify(err, undefined, 2));
        process.exit();
    });
module.exports = mongoose;
