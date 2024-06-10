var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=[];t.forEach(function(t){n.push(+t.textContent.replaceAll(",",""))});var r=n.reduce(function(t,e){return t+e},0),l=r/n.length;e.textContent=r.toLocaleString("en-US"),o.textContent=l.toLocaleString("en-US");
//# sourceMappingURL=index.728af199.js.map
