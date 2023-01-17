const http=require('http'); //call back function
const url=require(`url`);
const fs=require('fs'); //read data from file 
const replaceTemplate=require('./modules/replaceTemplate');
const loanFormula=require('./modules/loanFormula');

///read file 
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    `utf-8`
);

const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    `utf-8`
);



const dataObj = JSON.parse(tempCourse); ////CONVERT string to JS object

////server
//const server =http.createServer(function (req, res){
const server =http.createServer((req, res) => {  //convert to fat arrow 


    const {query, pathname} = url.parse(req.url,true);

    if(query.id){
        if (pathname === '/' || pathname.toLocaleLowerCase() === '/customer'){
            res.writeHead(200, {
                'Content-type': 'text/html'

            });

            const course = dataObj[Number(query.id)]; 

            const loanOutput=loanFormula(course);
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