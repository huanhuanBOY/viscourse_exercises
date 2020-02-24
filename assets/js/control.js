document.getElementById("sid_login").addEventListener("click", function() {
    let s = document.getElementById("sid_value").value;
    if (s.length == 8) {
        window.userID = s;
        document.getElementById("sid_container").style["display"] = "none"
        document.getElementById("id_exercise").style["display"] = "block"
    } else {
        alert("Student ID is not correct!!")
    }
})
document.getElementById("submit_button").addEventListener("click", function() {
    window.open("https://canvas.ust.hk/courses/29837", "_blank");
})