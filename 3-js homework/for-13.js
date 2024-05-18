let n = Number(prompt('n = '));
let s = 0;
for(let i = 1.1; i<=n ; i = i + 0.2){
    s = s - i;
}
for(let j = 1.0; j<=n ; j = j + 0.2){
    s = s + j;
}
console.log(s.toFixed(2));