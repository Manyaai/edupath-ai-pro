const CAREERS = [
{name:"Software Developer",category:"Technology",salary:"₹6L-25L",desc:"Build apps and systems."},
{name:"UI/UX Designer",category:"Creative",salary:"₹4L-15L",desc:"Design user experiences."},
{name:"Digital Marketer",category:"Business",salary:"₹3L-12L",desc:"Grow brands online."},
{name:"Doctor",category:"Healthcare",salary:"₹8L-30L",desc:"Treat patients."}
];

function generate(){

const interest=document.getElementById("interest").value;
const style=document.getElementById("style").value;
const risk=document.getElementById("risk").value;

let results = CAREERS.filter(c=>c.category===interest);

const report={
data:{interest,style,risk},
results
};

localStorage.setItem("report",JSON.stringify(report));

let history = JSON.parse(localStorage.getItem("history")) || [];
history.push(report);
localStorage.setItem("history",JSON.stringify(history));

window.location.href="report.html";
}

// REPORT PAGE
if(window.location.pathname.includes("report.html")){

const data = JSON.parse(localStorage.getItem("report"));

if(!data){
document.getElementById("report").innerHTML="<h2>No data found</h2>";
}else{

let html = `

<h1>Your Career Blueprint</h1>

<p>
Based on your interest in <b>${data.data.interest}</b> and preference for 
<b>${data.data.style}</b> work, here are your best matches:
</p>
`;

data.results.forEach(c=>{
html+=`

<div class="result-card">
<h2>${c.name}</h2>
<p>${c.desc}</p>
<p><b>Salary:</b> ${c.salary}</p>
</div>
`;
});

html+=`

<div class="result-card">
<h3>What you should do next</h3>
<p>Pick ONE path and start within 7 days. Execution matters more than thinking.</p>
</div>
`;

document.getElementById("report").innerHTML=html;
}

}

// DASHBOARD
if(window.location.pathname.includes("dashboard.html")){

const history = JSON.parse(localStorage.getItem("history")) || [];

let html="<h2>Past Reports</h2>";

history.forEach((h,i)=>{
html+=`

<div class="result-card">
<p><b>Report ${i+1}</b></p>
<p>${h.data.interest} | ${h.data.style} | ${h.data.risk}</p>
</div>
`;
});

document.getElementById("history").innerHTML=html;
}

// NAVIGATION
function goHome(){
window.location.href="index.html";
}

function goDashboard(){
window.location.href="dashboard.html";
}
