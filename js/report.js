document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("report");

const raw = localStorage.getItem("latest");

if (!raw) {
container.innerHTML = "<h2>No data found</h2>";
return;
}

const r = JSON.parse(raw);

let html = 
<div class="card">

<h1>Your Career Blueprint</h1>

<p>
You show a strong inclination towards <b>${r.data.style}</b> work and 
a clear interest in <b>${r.data.interest}</b> domains.
</p>

<p>
This combination suggests you will perform best in environments that reward 
${r.data.style.toLowerCase()} thinking and long-term consistency.
</p>

<hr>

<h2>Your Top Matches</h2>
;

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

