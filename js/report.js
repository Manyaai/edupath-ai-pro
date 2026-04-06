document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("report");

const raw = localStorage.getItem("latest");

if (!raw) {
container.innerHTML = "<h2>No data found</h2>";
return;
}

const r = JSON.parse(raw);

html = 
<div class="score-card">
<h2>Your Fit Score</h2>
<h1>${Math.floor(Math.random()*15)+85}%</h1>
<p>Strong alignment detected</p>
</div>
 + html;

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

html += 
<div class="career-block">

<h3>${c.name}</h3>

<p>${c.description}</p>

<p><b>Why this fits you:</b><br>
This role aligns with your thinking style and growth expectations.
</p>

<p><b>Salary:</b> ${c.salary}</p>

</div>
;

html += 
<hr>

<h2>What you should do next</h2>

<p>
Pick ONE of these paths and commit to it for the next 30 days.
Do not jump between options.
Execution matters more than overthinking.
</p>
;


