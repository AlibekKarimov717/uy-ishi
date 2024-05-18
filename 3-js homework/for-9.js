let a = +prompt('a =');
let b = +prompt('b =');
let s = 0;
for (let i = a; i <= b ; i++){
    s = i*i + s
}
console.log(s);