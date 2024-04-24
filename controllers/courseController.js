const courseTbl = require('../models/courseTbl');

const addCourse = async (req,res) => {
    try {
        const{id,course_name} = req.body;
        let courseData = await courseTbl.create({
            id : id,
            course_name : course_name
        });
        if(courseData){
            res.json({ message  : "Record inserted successfully", status : 1});
        }else{
            res.json({ message  : "Record  not inserted successfully", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewCourse = async (req,res) => {
    try {
        let course = await courseTbl.findAll();
        if(course){
            res.json({ Data  : course, status : 1});
        }else{
            res.json({ message  : "Record not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addCourse,
    viewCourse
}