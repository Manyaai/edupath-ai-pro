function generateCareers(data){

if (!Array.isArray(CAREERS)) {
console.error("CAREERS missing");
return [];
}

return CAREERS.map(c => {

let score = 0;

if (c.category === data.interest) score += 50;
if (data.style === "Creative" && c.category === "Creative") score += 30;
if (data.risk === "High" && c.salary.includes("∞")) score += 20;

return { ...c, score };

})
.sort((a,b)=>b.score-a.score)
.slice(0,3);

}

