document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("report");

const raw = localStorage.getItem("latest");

if (!raw) {
container.innerHTML = "<h2>No data found</h2>";
return;
}

const r = JSON.parse(raw);

let html = `<h1>Your Career Results</h1>`;

r.careers.forEach(c=>{
html += `
<div>
<h2>${c.name}</h2>
<p>${c.description}</p>
<p>Salary: ${c.salary}</p>
</div>
`;
});

container.innerHTML = html;

});

