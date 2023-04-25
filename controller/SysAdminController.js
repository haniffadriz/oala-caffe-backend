const bcrypt = require('bcrypt')

//model
const Sysadmin = require('../model/Sysadmin')
const Store = require('../model/Store')

exports.getSysAdmin = async (req, res) => {
    try {
        const User = await Sysadmin.find({
            username: 'fadlul'
        })

        return res.status(200).json(User)
    } catch (error) {
        return res.status(400).json({msg:'sett'})
    }
}

exports.createSysAdmin = async (req, res) => {
    const {email, password, confPassword, phone, username} = req.body
    if(password != confPassword) return res.status(404).json({msg: 'password not match'})
    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const SysAdminShema = await new Sysadmin({
            email: email,
            password: hashPassword,
            phone: phone,
            username: username,
            role: 'sysadmin'
        })
    
        SysAdminShema.save()

        return res.status(200).json({msg: 'data create succesfully'})
    } catch (error) {
        return res.status(404).status({msg: error})
    }
}
