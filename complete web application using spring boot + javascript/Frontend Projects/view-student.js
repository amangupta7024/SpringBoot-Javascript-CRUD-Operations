document.addEventListener("DOMContentLoaded", fetchStudent)

async function fetchStudent() {

    try{
        const response = await fetch('http://localhost:8082/getStudents')

        if(response.ok) {
            const students = await response.json()
            const tbody = document.getElementById("tbody");
            tbody.innerHTML = '';//clear existing table content
            students.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.dept}</td>
                <td>${student.age}</td>
                <td><button class="btn btn-primary" onclick="deleteStudent(${student.id})">Delete</button></td>
                <td><button class = "btn btn-secondary" onclick= "updateStudent(${student.id},'${student.name}','${student.age}','${student.dept}')">Update</button></td>
                `;

                tbody.appendChild(row);

            });
        }
    } catch(error) {
        console.log("error is comming which fetching the student data" + error);
    }
}

async function deleteStudent(id) {

    const baseURL = "http://localhost:8082/deleteStudent/"+id;
    
    try{
        const response = await fetch(baseURL);
        alert("student deleted successfully");
        fetchStudent();
    } catch(error ){
        console.log("error is coming while deleting the student data" + error);
    }
}

function updateStudent(id, name,age, dept) {
    window.location.href = `update-student.html?id=${id}&name=${name}&age=${age}&dept=${dept}`
}