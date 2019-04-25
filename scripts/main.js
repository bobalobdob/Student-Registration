var Student = (function () {
    function Student() {
    }
    return Student;
}());
var testStu = new Student();
testStu.firstName = "Joe";
testStu.lastName = "Ortiz";
testStu.dateOfBirth = new Date(1980, 3, 1);
window.onload = function () {
    var regBtn = document.querySelector("main > button");
    regBtn.onclick = registerStudent;
};
function registerStudent() {
    if (isValid()) {
        var nextStudent = getStudent();
        displayStudent(nextStudent);
    }
}
function isValid() {
    var requiredElems = document.querySelectorAll("main > input[data-required]");
    var valid = true;
    for (var i = 0; i < requiredElems.length; i++) {
        var currInput = requiredElems[i];
        if (currInput.value == "") {
            var span = currInput.nextElementSibling;
            var msg = span.getAttribute("data-msg");
            span.innerHTML = msg;
            valid = false;
        }
    }
    return valid;
}
function getStudent() {
    var s = new Student();
    s.firstName = document.getElementById("first-name").value;
    s.lastName = document.getElementById("last-name").value;
    return s;
}
function displayStudent(stu) {
    var studentLI = document.createElement("li");
    studentLI.innerText = stu.firstName + " " + stu.lastName;
    studentLI.onclick = function () {
        var StudentName = this;
        var agree = confirm("Are you sure you want to delete " + StudentName.innerHTML);
        if (agree) {
            var currItem = this;
            currItem.remove();
        }
    };
    var list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}
