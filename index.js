// function apply(num, f){
//     return f(num);
// }

// function double(num){
//     return 2 * num;
// }

// console.log(apply(5, (num) =>  2 * num));

const dollars = ['32$', '12$', '32$', '17$', '20$'];

//TODO Map

//Mapeo de lo mas manual
let prices = [];
for (let i = 0; i < dollars.length; i++) {
    prices[i] = Number(dollars[i].slice(0, dollars[i].length - 1));
}
//Mapeo mas o menos
prices = [];
for (const dollar of dollars){
    prices.push(Number(dollar.slice(0, dollar.length - 1)));
}
//Mapeo chido perron
prices = dollars.map((dollar) => Number(dollar.slice(0, dollar.length - 1)));

console.log(prices);

//TODO Filter

//No chido
let expensive = [];
for(const price of prices){
    if (price >= 20){
        expensive.push(price);
    }
}

//Chido
expensive = prices.filter((price) => price >= 20);

console.log(expensive);

//TODO Reduce

let sum = 0;
for (const price of expensive){
    sum += price;
}

sum = expensive.reduce((acum, price) => acum + price);
console.log(sum);
