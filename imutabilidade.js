const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 7
    },
    {
        name: 'Paul',
        grade: 8
    }
]

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados.');
console.log(getApprovedStudents(students));