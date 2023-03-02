let n=6;
let first_term = 0;
let second_term = 1;
let next_term;
for(let i=0;i<n;i++){
    console.log(first_term);
    next_term=first_term+second_term;
    first_term = second_term;
    second_term = next_term;
}