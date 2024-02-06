//* create a fun to create a student the data will be sent from the renderer process

import Student from "../models/Student";


export const createStudent = async (event, studentData) => {
    const student = studentData;
    try {
        const newStudent = new Student(student);
        const result = await newStudent.save();
        console.log(result);

        const id = `${result._id}`;
        console.log(id);

        //* convert the result to JSON
        const studentJSON = result.toJSON();

        event.sender.send('create-student-success', studentJSON);

    } catch (error) {
        console.log(error);
        event.sender.send('create-student-error', error.message);
    }
};