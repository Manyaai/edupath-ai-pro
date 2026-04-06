let r = JSON.parse(localStorage.getItem("latest"));

let html = `
<div class="card">

<h1>Your Career Blueprint</h1>

<p>
Based on your preference for <b>${r.data.style}</b> work and interest in 
<b>${r.data.interest}</b>, your profile indicates a strong alignment with 
high-growth, future-ready careers.
</p>

<hr>

<h2>Top Career Matches</h2>
`;

r.careers.forEach((c,i)=>{
html += `
<div class="career-block">
<h3>#${i+1} ${c.name}</h3>

<p>${c.description}</p>

<p><b>Why this fits you:</b><br>
This role matches your decision style, learning pattern, and long-term growth mindset.
</p>

<p><b>Salary Range:</b> ${c.salary}</p>
<p><b>Growth Potential:</b> ${c.growth}</p>

<h4>Skills You Need</h4>
<ul>${c.skills.map(s=>`<li>${s}</li>`).join("")}</ul>

<h4>Your Roadmap</h4>
<ol>${c.roadmap.map(s=>`<li>${s}</li>`).join("")}</ol>

</div>
`;
});

html += `
<hr>

<h2>Reality Check</h2>
<p>
You are currently at the exploration stage. The biggest gap is execution.
Consistency and real-world projects will determine your success.
</p>

<h2>Next Step</h2>
<p>
Pick ONE path. Start building within 7 days. Avoid overthinking.
</p>

</div>
`;

document.getElementById("report").innerHTML = html;
