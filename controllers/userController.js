const userTbl = require('../models/userTbl');

const addUser = async (req,res) => {
    try {
        const{id,name,marks,age,FeeId,CourseId} = req.body;
        let userData = await userTbl.create({
            id : id,
            name : name,
            marks : marks,
            age : age,
            FeeId :FeeId,
            CourseId : CourseId
        });
        if(userData){
            res.json({ message  : "Record inserted successfully", status : 1});
        }else{
            res.json({ message  : "Record  not inserted successfully", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewUser = async (req,res) => {
    try {
        let users = await userTbl.findAll();
        if(users){
            res.json({ Data  : users, status : 1});
        }else{
            res.json({ message  : "Record not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewUserById = async (req,res) => {
    try {
        let users = await userTbl.findOne({ where : {id : req.body.id} });
        if(users){
            res.json({ Data  : users, status : 1});
        }else{
            res.json({ message  : "Record not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteuser = async (req,res) => {
    try {
        let users = await userTbl.destroy({ where : {id : req.body.id} });
        if(users){
            res.json({ message  : "Record deleted successfully", status : 1});
        }else{
            res.json({ message  : "Record not deleted", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addUser,
    viewUser,
    viewUserById,
    deleteuser
}