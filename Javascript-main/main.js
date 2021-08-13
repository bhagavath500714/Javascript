const companies=[
    {name: "company One", category: "Finance", start: 1981, end: 2003},
    {name: "company Two", category: "Retail", start: 1992, end: 2008},
    {name: "company Three", category: "Auto", start: 1999, end: 2007},
    {name: "company Four", category: "Technology", start: 2011, end: 2016},
    {name: "company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 13, 15, 45, 25, 64, 32];

// standard
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company, index){
//     console.log(company);
//     console.log(index);
//     console.log(company.name);
// });

// filter
// ---formal
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// console.log(canDrink);

// --- ES6 arrow func
// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// ---Filter retail companies --es5
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

// --ES6
// const retailCompanies = companies.filter(company => company.category === 'Finance');

// console.log(retailCompanies);

// -----Get 80's companies 
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(eightiesCompanies);

// -----Get companies lasted 10 years
// const lastedTenYears = companies.filter(company => (company.end - company.start > 10));
// console.log(lastedTenYears);


// map
// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const companyNames = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// -----shorthand
// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2);
// ----compine this two
// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

// console.log(ageMap);

// sort
// ---sort companies by start year
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start < b.start ? 1 : -1 ));
// console.log(sortedCompanies);
// ----sort age -assending, desc (a - b) asc, b-a desc
// const sortAges = ages.sort((a, b) => b - a);
// console.log(sortAges);
// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// ---get total yrars for all companies
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);
// Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);