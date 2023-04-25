//model
const Store = require('../model/Store')

exports.createStore = (req, res) => {
    const { name } = req.body
    try {
        const StoreSchema = new Store({
            name: name
        })
        
        StoreSchema.save()

        return res.status(200).json({msg: 'data create sucessfullt'})
    } catch (error) {
        return res.status(200).json({msg: error})
    }
}