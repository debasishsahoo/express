const UserModel = require('../models/user.model')
const UserCtrl = {
    signup: async (req, res) => {
        const { name, email, password, mobile } = req.body;
        const result = await UserModel.create({ name, email, password, mobile });
        res.status(201).json({
            message: "Sucessfully Register",
            result: result
        });
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