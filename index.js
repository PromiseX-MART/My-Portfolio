const navBar = document.querySelector("nav")
const list = document.querySelector("#list")
const menuBar = document.querySelector("#menu")
const header = document.querySelector("header")
const exit = document.querySelector("#exit")
const skills = document.querySelector("#skills")
const Btn = document.querySelector(".submit")
const input1 = document.querySelector("#name")
const input2 = document.querySelector("#email")
const input3 = document.querySelector("textarea")



window.addEventListener("resize", function () {
    const width = window.innerWidth

    if (width < 768) {
        skills.classList.add("skills")
    }
    else {
        skills.classList.remove("skills")


    }
})
// console.log(list)
menuBar.addEventListener("click", function () {
    list.classList.toggle("popup")
})
exit.addEventListener("click", function () {
    list.classList.remove("popup")
})
Btn.addEventListener("click", function () {
    let name = input1.value
    let email = input2.value
    let message = input3.value
    if (name != "" && email != "" && message != "") {
        setTimeout(() => { window.alert("Thanks for reaching out"); }, 5000);

        Btn.value = "Sending..."
    }
    // else {
    //     Btn.value = "FILL THE FORM"
    // }

})
