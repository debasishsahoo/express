const express = require('express')
const { PORT, URL } = require('../CONFIG')
const connectDB = require('../DB')
const cors = require('cors')

//Route  
const {
    UserRoute,
    ProductRoute,
    OrderRoute,
    AdminRoute
} = require('../ROUTES')

const app = express()

//for Security
app.use(cors())
app.use(express.json())


//Mother Route
app.use('/api/v1/user/', UserRoute)  //127.0.0.1:7000/api/v1/user/
app.use('/api/v1/product/', ProductRoute)  //127.0.0.1:7000/api/v1/product/
app.use('/api/v1/order/', OrderRoute)  //127.0.0.1:7000/api/v1/order/
app.use('/api/v1/admin/', AdminRoute)   //127.0.0.1:7000/api/v1/admin/

const startApp = async () => {
    try {
        await connectDB(URL);
        app.listen(PORT, () => {
            console.log(`DB & Server Connected on http://localhost:${PORT}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
startApp()
