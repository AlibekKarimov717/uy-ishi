let n = Number(prompt('n = '));
let j =0;
let s = 1;
for(let i = 1; i<=n ; i++){
    s *= i;
    j += 1/s;
}
console.log(j.toFixed(1));