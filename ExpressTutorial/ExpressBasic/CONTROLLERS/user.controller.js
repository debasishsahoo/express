
const UserModel = require('../MODELS/user.model')

const GetAllUser = async () => { }
const GetUserById = async () => { }
const UpdateUserById = async () => { }
const DeleteUserById = async () => { }
const BlockUserById = async () => { }
const SignUp = async (req, res, next) => {
    const {
        body: {
            name: username,
            email: useremail,
            mobile: usermobile,
            passowrd: uerpassword }
    } = req

    if (username === '' || useremail === '' || uerpassword === '') {
        return res.status(400).json({
            message: 'Please Provide Proper Data'
        })
    }

    const OldUser = await UserModel.findOne({ useremail })
    
    console.log(OldUser)

    if (OldUser) {
        return res.status(406).json({
            message: 'Eamil Already Exist'
        })
    }
    try {
        const result = await UserModel.create(req.body)
        res.status(201).json({
            message: 'Sucessfully Register',
            result: result
        })
    } catch (err) {
        res.status(500).json({
            message: 'Something Went Wrong',
            result: err
        })
    }







}
const SignIn = async () => { }
const PasswordChange = async () => { }

module.exports = {
    GetAllUser,
    GetUserById,
    UpdateUserById,
    DeleteUserById,
    BlockUserById,
    SignUp,
    SignIn,
    PasswordChange
}