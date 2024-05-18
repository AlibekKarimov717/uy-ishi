let n = Number(prompt('n = '));
let x = Number(prompt('x = '));
let j =0;
let s = 1;
for(let i = 1; i<=n ; i++){
    s *= i;
    j += Math.pow(x , i)/s;
    
}
console.log(j.toFixed(1));