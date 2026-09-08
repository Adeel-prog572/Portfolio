const nameInput = document.getElementById("name");
const rollNoInput = document.getElementById("rollNo");
const classInput = document.getElementById("className");
const emailInput = document.getElementById("email");

const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const studentCount = document.getElementById("studentCount");
const searchInput = document.getElementById("search");
const error = document.getElementById("error");
const emptyMessage = document.getElementById("emptyMessage");


// ===============================
// Students database se load karna
// ===============================

let students = [];

function loadStudents() {

    fetch("get_student.php")
        .then(response => response.json())
        .then(data => {

            if (data.success) {

                students = data.students;

                displayStudents();

            } else {

                error.innerText = data.message;

            }

        })
        .catch(err => {

            console.log(err);

            error.innerText =
                "Database se students load nahi ho rahe.";

        });

}


// ===============================
// Students display karna
// ===============================

function displayStudents(list = students) {

    studentList.innerHTML = "";

    list.forEach(function(student) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>

            <td>${student.rollNo}</td>

            <td>${student.className}</td>

            <td>${student.email}</td>

            <td>
                <button
                    class="delete-btn"
                    onclick="deleteStudent(${student.id})"
                >
                    Delete
                </button>
            </td>
        `;

        studentList.appendChild(row);

    });


    studentCount.innerText =
        `Total Students: ${students.length}`;


    if (list.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }

}


// ===============================
// Student add karna
// ===============================

function addStudent() {

    const name = nameInput.value.trim();
    const rollNo = rollNoInput.value.trim();
    const className = classInput.value.trim();
    const email = emailInput.value.trim();


    if (
        name === "" ||
        rollNo === "" ||
        className === "" ||
        email === ""
    ) {

        error.innerText =
            "Please fill all fields.";

        return;
    }


    const formData = new FormData();

    formData.append("name", name);
    formData.append("rollNo", rollNo);
    formData.append("className", className);
    formData.append("email", email);


    fetch("add_student.php", {

        method: "POST",

        body: formData

    })

    .then(response => response.json())

    .then(data => {

        if (data.success) {

            nameInput.value = "";
            rollNoInput.value = "";
            classInput.value = "";
            emailInput.value = "";

            error.innerText = "";

            loadStudents();

        } else {

            error.innerText = data.message;

        }

    })

    .catch(err => {

        console.log(err);

        error.innerText =
            "Student add nahi ho raha.";

    });

}


// ===============================
// Delete student
// ===============================

function deleteStudent(id) {

    const formData = new FormData();

    formData.append("id", id);


    fetch("delete_student.php", {

        method: "POST",

        body: formData

    })

    .then(response => response.json())

    .then(data => {

        if (data.success) {

            loadStudents();

        } else {

            error.innerText = data.message;

        }

    })

    .catch(err => {

        console.log(err);

        error.innerText =
            "Student delete nahi ho raha.";

    });

}


// ===============================
// Search student
// ===============================

searchInput.addEventListener(
    "input",
    function() {

        const searchValue =
            searchInput.value.toLowerCase();


        const filteredStudents =
            students.filter(function(student) {

                return (

                    student.name
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    student.rollNo
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    student.className
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    student.email
                        .toLowerCase()
                        .includes(searchValue)

                );

            });


        displayStudents(filteredStudents);

    }
);


// ===============================
// Add button
// ===============================

addBtn.addEventListener(
    "click",
    addStudent
);


// ===============================
// App start
// ===============================

loadStudents();