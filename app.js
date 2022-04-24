const inquirer = require('inquirer');
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?'

    }
]).then(answers => console.log(answers));

//const fs = require('fs');
//
//const generatePage = require('./src/page-template');
//
//const pageHTML = generatePage(name, github);
//
////writes html file with name and github input. 
//fs.writeFile('index.html', generatePage(name, github), err => {
//    if (err) throw err;
//
//    console.log('portfolio complete! check out index.html to see the output!');
//});
//



