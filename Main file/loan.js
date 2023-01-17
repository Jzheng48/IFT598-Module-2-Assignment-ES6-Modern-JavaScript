const loanFormula=require('./modules/loanFormula');
const fs=require('fs'); 
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    `utf-8`
);
const dataObj = JSON.parse(tempCourse);
const course = dataObj[0];



console.log(loanFormula(course));
