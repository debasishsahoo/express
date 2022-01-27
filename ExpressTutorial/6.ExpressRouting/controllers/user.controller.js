
const UserCtrl = {
    signup: async (req, res) => {
        res.send('from Signup')
    },
    signin: async (req, res) => {
        res.send('from signin')
    },
    create: async (req, res) => {
        res.send('from createProfile')
    },
    view: async (req, res) => {
        res.send('from viewProfile')
    },
    edit: async (req, res) => {
        res.send('from EditProfile')
    },
    delete: async (req, res) => {
        res.send('from deleteProfile')
    },
    viewAll: async (req, res) => {
        res.send('from viewAll')
    },
    blockUser: async (req, res) => {
        res.send('from blockUser')
    },
};
module.exports = UserCtrl;