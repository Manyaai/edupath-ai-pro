```javascript id="app001"}
form.onsubmit=(e)=>{
e.preventDefault();

let data={
interest:interest.value,
style:style.value,
risk:risk.value
};

let careers=generateCareers(data);

let report={data,careers,date:new Date().toLocaleString()};

saveReport(report);
localStorage.setItem("latest",JSON.stringify(report));

location.href="report.html";
};

function goDashboard(){
location.href="dashboard.html";
}
```
