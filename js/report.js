```javascript id="repjs001"}
let r=JSON.parse(localStorage.getItem("latest"));

let html=`<h2>Your Career Blueprint</h2>

<p>You lean towards <b>${r.data.style}</b> work and <b>${r.data.interest}</b> domain.</p>
<hr>`;

r.careers.forEach((c,i)=>{
html+=`
<div class="card">
<h2>#${i+1} ${c.name}</h2>
<p>${c.description}</p>
<p><b>Salary:</b> ${c.salary}</p>
<p><b>Growth:</b> ${c.growth}</p>

<h4>Skills:</h4>
<ul>${c.skills.map(s=>`<li>${s}</li>`).join("")}</ul>

<h4>Roadmap:</h4>
<ol>${c.roadmap.map(s=>`<li>${s}</li>`).join("")}</ol>
</div>
`;
});

report.innerHTML=html;

function downloadPDF(){
window.print();
}
```
