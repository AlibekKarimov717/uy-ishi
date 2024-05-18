let n = Number(prompt('n = '));
let a = Number(prompt('a = '));
let s = 0;
for(let i = 1; i<=n ; i++){
    s += Math.pow(a , i);
}
console.log(s);
