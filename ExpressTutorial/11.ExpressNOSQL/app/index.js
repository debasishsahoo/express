const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const dbconnect = require('../DB/MongoDb.Connect')
const UserRoutes = require('../routes/user.routes')
const NewsRoutes = require('../routes/news.routes')
const AdminRoutes = require('../routes/admin.routes')

dotenv.config();
const PORT = process.env.PORT

const app = express();
app.use(express.json())
app.use(cors())

//Application root routing
app.use('/user', UserRoutes);
app.use('/news', NewsRoutes);
app.use('/admin', AdminRoutes);

//Root Routing Level Error Handiling 
app.use('*', (req, res) => {
    res.send('Oops! 404 API Not found....')
});



if (dbconnect) {
    const SERVER = app.listen(PORT, () => {
        const HOST = SERVER.address().address
        console.log(`Backend Server is Connected at http://${HOST}:${PORT}`);
    })
} else {
    console.error('Database Connection Error');
}



