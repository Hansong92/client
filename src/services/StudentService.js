import axios from 'axios';

const Student_API_BASE_URL = "http://localhost:8080/api/v1/Students";

class StudentService {

    getStudents(){
        return axios.get(Student_API_BASE_URL);
    }

    createStudent(Student){
        return axios.post(Student_API_BASE_URL, Student);
    }

    getStudentById(StudentId){
        return axios.get(Student_API_BASE_URL + '/' + StudentId);
    }

    updateStudent(Student, StudentId){
        return axios.put(Student_API_BASE_URL + '/' + StudentId, Student);
    }

    deleteStudent(StudentId){
        return axios.delete(Student_API_BASE_URL + '/' + StudentId);
    }
}

export default new StudentService()