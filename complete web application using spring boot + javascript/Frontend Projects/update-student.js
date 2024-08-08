
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById("updatedId").value = urlParams.get('id');
    document.getElementById("updatedName").value = urlParams.get("name");
    document.getElementById("updatedAge").value = urlParams.get('age');
    document.getElementById("updatedDept").value = urlParams.get("dept");
});

async function updateStudent() {
    //prevent default
    event.preventDefault();
    
    const id = document.getElementById("updatedId").value;
    const name = document.getElementById("updatedName").value;
    const dept = document.getElementById("updatedDept").value;
    const age = document.getElementById("updatedAge").value;

    const student = {id, name, dept, age};

    console.log("this is your updated student data" + JSON.stringify(student) );

    try {
        const response = await fetch('http://localhost:8082/updateStudent', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });

        if(response.ok) {
            alert("Student updated successfully");
            window.location.href = "view-student.html";
        }

    } catch(error) {
        console.log("error is coming while updating the student");
    }
}
