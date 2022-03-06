require('dotenv').config()
const PORT = process.env.PORT || 7000;
const MONGODB_USER = process.env.DBUSER;
const MONGODB_PASSWORD = process.env.DBPASS;
const MONGODB_DBNAME = process.env.DBNAME;
const SECRET = process.env.SECRET;
const ENCRIPTION = process.env.ENCRIPTION;
const JWT_LIFETIME = process.env.JWT_LIFETIME

const URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@crudapp.dusom.mongodb.net/${MONGODB_DBNAME}?retryWrites=true&w=majority`;

module.exports = { PORT, URL, SECRET, ENCRIPTION, JWT_LIFETIME }