const feesTbl = require('../models/feesTbl');

const addFees = async (req,res) => {
    try {
        const{fees} = req.body;
        let feesData = await feesTbl.create({
            fees : fees
        });
        if(feesData){
            res.json({ message  : "Record inserted successfully", status : 1});
        }else{
            res.json({ message  : "Record  not inserted successfully", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewFees = async (req,res) => {
    try {
        let fees = await feesTbl.findAll();
        if(fees){
            res.json({ Data  : fees, status : 1});
        }else{
            res.json({ message  : "Record not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addFees,
    viewFees
}