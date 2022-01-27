
const NewsCtrl = {
    create: async (req, res) => {
        res.send('from create')
    },
    viewAll: async (req, res) => {
        res.send('from viewAll')
    },
    edit: async (req, res) => {
        res.send('from Edit')
    },
    delete: async (req, res) => {
        res.send('from delete')
    },
    viewById: async (req, res) => {
        res.send('from viewById')
    },
    blockNews: async (req, res) => {
        res.send('from blockNews')
    },
};
module.exports = NewsCtrl;