const db = require('../config/db');

const select = async (req,res) => {
    try {
        let studentData = await db.query('select * from students where id = :id',
            {
                replacements: { id : '1'},
                type: db.QueryTypes.SELECT
            })
        if(studentData){
            res.json({ Data : studentData, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    select
}