id="comp001"}
function compareCareers(careers){
let html="<h2>Comparison</h2>";

careers.forEach(c=>{
html+=`<p>${c.name} - ${c.growth}</p>`;
});

compare.innerHTML=html;
}

