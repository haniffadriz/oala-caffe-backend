const jwt = require('jsonwebtoken')
const Sysadmin = require('../model/Sysadmin')

//refreshToken Sysadmin
exports.refreshTokenSysadmin = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) return res.status(401).json({msg: 'token expired already'})
        const SysadminShema = await Sysadmin.find({
            refreshToken: refreshToken
        })
        if(!SysadminShema[0]) res.status(401).json({msg: 'token expired already'})
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) res.status(401).json({msg: err})
            const id = SysadminShema[0].id
            const email = SysadminShema[0].email
            const phone = SysadminShema[0].phone
            const username = SysadminShema[0].username
            const role = SysadminShema[0].role
            const accessToken = jwt.sign({id, email, phone, username, role}, process.env.ACCESSS_TOKEN_SECRET, {
                expiresIn: '15s'
            })
            res.status(200).json({accessToken: accessToken})
        })
    } catch (error) {
        res.status(404).json({msg: 'unauthorize user'})
    }
}