const mongoose = require('mongoose')
//smongoose.Promise = bluebird
require('dotenv').config()


const user = mongoose.createConnection(process.env.URI.toString(),
    {
        dbName: process.env.DBNAME,
        useNewUrlParser: true,
        user: process.env.DBUSER,
        pass: process.env.DBPASSWORD
        
    });
    
const Student = user.model('Student', require('./student-schemas/student.schema'), 'students')
const Course = user.model('Course', require('./course-schemas/course.schema'), 'courses')
const Activity = user.model('Activity', require('./activity-schemas/activity.schema'), 'activites')
const Note = user.model('Notes', require('./note-schemas/note.schema'), 'notes')
const Module = user.model('Modules', require('./module-schemas/module.schema'), 'modules')
const Lecturer = user.model('Lecturers', require('./lecturer-schemas/lecturer.schema'), 'lecturers')
const Task = user.model('Tasks', require('./task-schemas/task.schema'), 'tasks')
const Session = user.model('Session', require('./session-schemas/session.schema'), 'sessions')
const Term = user.model('Term', require('./term-schemas/term.schema'), 'terms')
const Week = user.model('Week', require('./week-schemas/week.schema'), 'weeks')

// Module.create({
//     name: "Software Engineering",
//     code: "CS3003"
// })


//User Models
// const User = user.model('User', require('./user-schemas/user.schema'), 'users')
// const Follower = user.model('Follower', require('./user-schemas/follower.schema'), 'followers')

module.exports = {
    Student,
    Course,
    Activity,
    Note,
    Module,
    Lecturer, 
    Task,
    Session,
    Term,
    Week

}