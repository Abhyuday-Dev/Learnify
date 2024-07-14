import mongoose from "mongoose";


const UserSchema=new mongoose.Schema({
    username:String,
    name:String,
    password:String,
    purchasedCourses:[{type:mongoose.Schema.Types.ObjectId,ref:'Course'}]
});

const AdminSchema=new mongoose.Schema({
    email:{type:String},
    username: {type:String},
    password: String
});

const CourseSchema=new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:String,
    published:Boolean,
    enrolledStudents:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
});

const User=mongoose.model('User',UserSchema);
const Admin=mongoose.model('Admin',AdminSchema);
const Course=mongoose.model('Course',CourseSchema);

module.exports = {
    User,Admin,Course
}
