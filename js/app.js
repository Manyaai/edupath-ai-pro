document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("form");

if (!form) {
console.error("Form not found");
return;
}

form.addEventListener("submit", function(e) {
e.preventDefault();

try {

const interest = document.getElementById("interest").value;
const style = document.getElementById("style").value;
const risk = document.getElementById("risk").value;

if (!interest || !style || !risk) {
alert("Please fill all fields");
return;
}

const data = { interest, style, risk };

if (typeof generateCareers !== "function") {
alert("Engine not loaded properly");
return;
}

const careers = generateCareers(data);

if (!careers || careers.length === 0) {
alert("No career results generated");
return;
}

const report = {
data,
careers,
date: new Date().toLocaleString()
};

localStorage.setItem("latest", JSON.stringify(report));

window.location.href = "report.html";

} catch (err) {
console.error(err);
alert("Something broke. Check console.");
}

});

});

function goDashboard(){
window.location.href = "dashboard.html";
}

