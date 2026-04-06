document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
e.preventDefault();

const data = {
interest: document.getElementById("interest").value,
style: document.getElementById("style").value,
risk: document.getElementById("risk").value
};

const loading = document.createElement("div");
loading.className = "loading-screen";
loading.innerHTML = `
<div class="loader">
<h2>Analyzing your profile...</h2>
<p>Mapping skills • Evaluating careers • Building roadmap</p>
</div>
`;

document.body.appendChild(loading);

setTimeout(() => {

const careers = generateCareers(data);

const report = {
data,
careers,
date: new Date().toLocaleString()
};

saveReport(report);
localStorage.setItem("latest", JSON.stringify(report));

window.location.href = "report.html";

}, 2000);

});

function goDashboard(){
window.location.href = "dashboard.html";
}
