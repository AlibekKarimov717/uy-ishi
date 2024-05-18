let n = Number(prompt('n = '));
let j =0;
let s = 1;
for(let i = 1; i<=n ; i++){
    s *= i;
    j += s;
}
console.log(j);