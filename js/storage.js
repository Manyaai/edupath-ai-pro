id="store001"}
function saveReport(r){
let arr=JSON.parse(localStorage.getItem("reports"))||[];
arr.push(r);
localStorage.setItem("reports",JSON.stringify(arr));
}

function getReports(){
return JSON.parse(localStorage.getItem("reports"))||[];
}
