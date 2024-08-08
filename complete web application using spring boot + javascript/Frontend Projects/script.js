

async function handleSubmit(event) {
    //prevent default
    event.preventDefault();

    //get values

    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const age = document.getElementById("age").value;

    const student = {id, name, dept, age};



    console.log("this is your student data "+ JSON.stringify(student));

    const baseURL = "http://localhost:8082/addStudent"

    try{
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(student)
        });
 
        if(response.ok) {
            alert("Student Added Successfully");
        }
    } catch (error) {
        console.log("error is comming while adding the student" + error);
    }

}

function redirectToViewStudent() {
    window.location.href = "view-student.html";
}