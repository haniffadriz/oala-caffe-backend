const jwt = require('jsonwebtoken')

exports.verificationToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token === null) return res.status(401).json({msg: 'yaiks'})
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.status(200).json({msg: err})
        req.id = decoded.id
        req.email = decoded.email
        req.phone = decoded.phone
        req.username = decoded.username
        req.role = decoded.role
        next()
    })
}