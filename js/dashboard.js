```javascript id="dashjs001"}
let reports=getReports();

let html="<h2>History</h2>";

reports.forEach(r=>{
html+=`<p>${r.date} - ${r.careers.map(c=>c.name).join(", ")}</p>`;
});

history.innerHTML=html;
```
