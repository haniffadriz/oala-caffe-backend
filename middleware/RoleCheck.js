exports.sysAdminOnly = (req, res, next) => {
    if(req.role !== 'sysadmin') return res.status(404).json({msg: 'you dont have permission!'})
    next()
}