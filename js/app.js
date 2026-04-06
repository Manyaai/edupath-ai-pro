document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
e.preventDefault();

const data = {
interest: document.getElementById("interest").value,
style: document.getElementById("style").value,
risk: document.getElementById("risk").value
};

const careers = generateCareers(data);

const report = {
data,
careers
};

localStorage.setItem("latest", JSON.stringify(report));

window.location.href = "report.html";

});

});

function goDashboard(){
window.location.href = "dashboard.html";
}

