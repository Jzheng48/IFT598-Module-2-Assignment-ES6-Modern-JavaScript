const http=require('http'); //call back function
const url=require(`url`);
const fs=require('fs'); //read data from file 
const replaceTemplate=require('./modules/replaceTemplate');
const loanFormula=require('./modules/loanFormula2');

///read file 
/*const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    `utf-8`
);*/

const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    `utf-8`
);

var customers=[
    {id : 0,
    customerName : "vito",
    phoneNumber : "999-999-9999",
    address : "tempe",
    loanAmount : 5000,
    interest: 0.01,
    loanTermYears : 1,
    loanType: "None",
    description: "None",
    calculatedLoanAmount: function(){
        return loanFormula(this.interest,this.loanAmount,this.loanTermYears)

    }
    },

    {id : 1,
    customerName : "jack",
    phoneNumber : "901-931-1923",
    address : "galendal",
    loanAmount : 104134,
    interest: 0.14,
    loanTermYears : 5,
    loanType: "None",
    description: "None",
    calculatedLoanAmount: function(){
        return loanFormula(this.interest,this.loanAmount,this.loanTermYears)

    }
    },

    {id : 2,
    customerName : "logic",
    phoneNumber : "999-187-1233",
    address : "phoenix",
    loanAmount : 68213,
    interest: 0.20,
    loanTermYears : 10,
    loanType: "None",
    description: "None",
    calculatedLoanAmount: function(){
        return loanFormula(this.interest,this.loanAmount,this.loanTermYears)

    }
    },

    {id: 3,
    customerName: "james",
    phoneNumber : "912-122-1324",
    address : "tempe",
    loanAmount : 10000,
    interest: 0.06,
    loanTermYears : 10,
    loanType: "None",
    description: "None",
    calculatedLoanAmount: function(){
        return loanFormula(this.interest,this.loanAmount,this.loanTermYears)

    }
    },

    {id : 4,
    customerName : "soap",
    phoneNumber : "999-145-2351",
    address : "tempe",
    loanAmount : 56089,
    interest: 0.101,
    loanTermYears : 10,
    loanType: "None",
    description: "None",
    calculatedLoanAmount: function(){
        return loanFormula(this.interest,this.loanAmount,this.loanTermYears)

    }
    },

    {id : 5,
    customerName : "kim",
    phoneNumber : "912-457-2151",
    address : "glendale",
    loanAmount : 80000,
    interest: 0.5,
    loanTermYears : 10,
    loanType: "None",
    description: "None",
    calculatedLoanAmount: function(){
        return loanFormula(this.interest,this.loanAmount,this.loanTermYears)

    }
    }
]

//const dataObj = JSON.parse(tempCourse); ////CONVERT string to JS object

////server
//const server =http.createServer(function (req, res){
const server =http.createServer((req, res) => {  //convert to fat arrow 


    const {query, pathname} = url.parse(req.url,true);

    if(query.id){
        if (pathname === '/' || pathname.toLocaleLowerCase() === '/customer'){
            res.writeHead(200, {
                'Content-type': 'text/html'

            });

            const course = customers[Number(query.id)]; 

            const loanOutput=course.calculatedLoanAmount();
            const courseHTML =  replaceTemplate(templateHTMLCourse, course, loanOutput);


            res.end(courseHTML);
        }
        else{
            res.writeHead(404, {
                'Content-type': 'text/html'
            });
            res.end('resource not found')

 
        }
    } 

    
    
});



server.listen(8111, '127.0.0.1', () => {
    console.log('Listening to requests on port 8111');
})

customers.forEach((item)=> console.log(`${item.id} has total loan:${item.calculatedLoanAmount()}`))