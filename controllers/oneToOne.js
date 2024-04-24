const Students = require('../models/userTbl');
const Fees = require('../models/feesTbl');

Students.belongsTo(Fees);

const OneToOne = async (req,res) => {
    try {
        let Data = await Students.findAll({
            include : [{
                model : Fees
            }]
        });
        if(Data){
            res.json({ message : Data, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    OneToOne
}