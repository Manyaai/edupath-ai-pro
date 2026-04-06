```javascript id="bot001"}
function askBot(){
let input=chatInput.value.toLowerCase();
let r=JSON.parse(localStorage.getItem("latest"));

if(input.includes("best")){
chatOutput.innerText="Your best match is "+r.careers[0].name;
}
else{
chatOutput.innerText="Focus on your roadmap and skills.";
}
}
```
