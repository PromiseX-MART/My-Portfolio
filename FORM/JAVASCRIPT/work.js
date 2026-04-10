const studentForm = document.querySelector("#student-form")
const studentName = document.querySelector("#student-name")
const studentAge = document.querySelector("#student-age")
const studentClass = document.querySelector("#student-class")
const studentGrade = document.querySelector("#student-grade")
const studentData = document.querySelector("#student-data")
const students = JSON.parse(localStorage.getItem("students")) || []
const searchIcon = document.querySelector(".icons")
const searchBox = document.querySelector(".search-box")
editIndex = null

studentForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let name = studentName.value
    let age = studentAge.value
    let Sclass = studentClass.value
    let grade = studentGrade.value
    if (editIndex == null) {
        students.push({ name, age, Sclass, grade })
        studentForm.reset()
        studentGrade.value = ""
        localStorage.setItem("students", JSON.stringify(students))
    }
    else {
        students[editIndex] = { name, age, Sclass, grade }
        localStorage.setItem("students", JSON.stringify(students))
    }

    console.log(students)
    renderRow(students)
})
renderRow(students)

function renderRow(students) {
    studentData.innerHTML = ""
    students.forEach(function (student, index) {
        const tableRow = document.createElement("tr")
        tableRow.innerHTML = `
        <td>00${index + 1}</td>
        <td>${student.name.toUpperCase()}</td>
        <td>${student.age}</td>
        <td>${student.Sclass}</td>
        <td>${student.grade.toUpperCase()}</td>
        <td><button onclick="editRow(${index})">Edit</button></td>
        <td><button onclick="deleteRow(${index})">❌</button></td>
    `
        studentData.appendChild(tableRow)
        tableRow.classList.add("table-row")
    })
}

function editRow(id) {
    editIndex = id
    let row = students[id]
    studentName.value = row.name
    studentAge.value = row.age
    studentClass.value = row.Sclass
    studentGrade.value = row.grade
}

function deleteRow(index) {
    if (!confirm("Are you sure you want to delete this row?")) {
        return;
    }
    students.splice(index, 1)

    localStorage.setItem("students", JSON.stringify(students))
    
    renderRow(students)
}

searchBox.addEventListener("input", function () {
    const searchTerm = searchBox.value.toLowerCase()

    const filteredStudents = students.filter(function (student) {
        return student.name.toLowerCase().includes(searchTerm)
    })

    renderRow(filteredStudents)
})

renderRow(students)

// const nameCont = document.querySelector("#name-cont")
// const nameBtn = document.querySelector("#name-btn")
// const nameHolder = document.querySelector("#name-holder")
// let name = JSON.parse(localStorage.getItem("studentName")) || "User"

// console.log(name)
// document.addEventListener("click", function () {
//     const askName = prompt("What is your name")
//     localStorage.setItem("studentName", JSON.stringify(askName))
//     name=askName
//     nameHolder.textContent = name
// })

// nameHolder.textContent = name


