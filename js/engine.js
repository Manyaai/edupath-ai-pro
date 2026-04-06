```javascript
function generateCareers(data){

if (!Array.isArray(CAREERS)) {
console.error("CAREERS not loaded properly");
return [];
}

return CAREERS.map(c => {
let score = 50;

if (c.category === data.interest) score += 30;
if (data.style === "Creative" && c.category === "Creative") score += 20;
if (data.risk === "High" && c.salary.includes("∞")) score += 10;

return { ...c, score };
})
.sort((a,b)=>b.score-a.score)
.slice(0,3);

}
```
