const container = document.getElementById("report");

const raw = localStorage.getItem("latest");

if (!raw) {
container.innerHTML = "<h2>No data found. Go back.</h2>";
throw new Error("No report data");
}

const r = JSON.parse(raw);

let html = `<h1>Your Career Blueprint</h1>`;

r.careers.forEach((c,i)=>{
html += `
<div class="card">
<h2>#${i+1} ${c.name}</h2>
<p>${c.description}</p>
<p><b>Salary:</b> ${c.salary}</p>
<p><b>Growth:</b> ${c.growth}</p>
</div>
`;
});

container.innerHTML = html;

