const db = require('../../models')
const Pincode = db.pincode;

exports.addPincode = async (req, res) => {
    try {
        const obj = {
            pincode: req.body.pincode,
            city: req.body.city
        }
        const data = await Pincode.create(obj)
        if(data)
        {
            res.status(200).json({ success: true, message: 'Data generated successfully!' })
        }else{
            res.status(200).json({ success: false, message: 'Data not generated successfully!' })
        }
    } catch (error) {
        res.status(200).json({ success: false, message: error.message })
    }
};
