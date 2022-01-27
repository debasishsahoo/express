const express = require('express');
const app = express();
const PORT = 7000;
const UserRoutes = require('../routes/user.routes')
const NewsRoutes = require('../routes/news.routes')
const AdminRoutes = require('../routes/admin.routes')

app.use('/user', UserRoutes);
app.get('/news', NewsRoutes);
app.get('/admin', AdminRoutes);

const SERVER = app.listen(PORT, () => {
    const HOST = SERVER.address().address
    console.log(`Backend Server is Connected at http://${HOST}:${PORT}`);
});
