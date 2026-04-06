function generateCareers(data) {

return CAREERS.map(c => {

let score = 0;

if (c.category === data.interest) score += 50;
if (data.style === "Creative" && c.category === "Creative") score += 30;
if (data.style === "Analytical" && c.category === "Technology") score += 30;
if (data.risk === "High") score += 20;

return { ...c, score };

})
.sort((a,b)=>b.score-a.score)
.slice(0,3);

}

