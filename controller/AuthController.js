const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//model
const Admin = require('../model/Sysadmin')
const Sysadmin = require('../model/Sysadmin')

//Sysadmin
exports.SysAdminLogin = async (req, res) => {
    try {
        const SysadminShema = await Sysadmin.find({
            email: req.body.email
        })
        const cpw = await bcrypt.compare(req.body.password, SysadminShema[0].password)
        if(!cpw) return res.status(404).json({mgs:'invalid password'})
        const id = SysadminShema[0].id
        const email = SysadminShema[0].email
        const phone = SysadminShema[0].phone
        const username = SysadminShema[0].username
        const role = SysadminShema[0].role

        const accessToken = jwt.sign({id, email, phone, username, role}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        })

        const refreshToken = jwt.sign({id, email, phone, username, role}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 1000
        })

        return res.status(200).json({accessToken: accessToken})
    } catch (error) {
        res.status(404).json({msg: 'email not found!'})
    }
}


exports.SysadminLogout = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

//admin

//employee
