const express = require('express');
const app = express();
const PORT = 7000;
const UserRoutes = require('../routes/user.routes')
const NewsRoutes = require('../routes/news.routes')
const AdminRoutes = require('../routes/admin.routes')

//Application root routing
app.use('/user', UserRoutes);
app.use('/news', NewsRoutes);
app.use('/admin', AdminRoutes);

//Root Routing Level Error Handiling 
app.use('*', (req, res) => {
    res.send('Oops! 404 API Not found....')
});


const SERVER = app.listen(PORT, () => {
    const HOST = SERVER.address().address
    console.log(`Backend Server is Connected at http://${HOST}:${PORT}`);
});

//serverURL:127.0.0.1:7000
//Application Path:  1./user,2./news,3./admin


//So my Application URL is 3
//127.0.0.1:7000/user/
//127.0.0.1:7000/news/
//127.0.0.1:7000/admin/
