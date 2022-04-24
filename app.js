const inquirer = require('inquirer');


const promptUser = () => {
return inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?: '

    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Your Github Username: '
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself please: '
    }
]);
};



promptProject = portfolioData => {
    //checks if 'projects' array property exists, creates one if not
    if (!portfolioData.projects){
        portfolioData.projects = [];
    }
    console.log(`
    ==================
    NEW PROJECT HERE 
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your project?'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'JQuery', 'BootStrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (required)'
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }else {
            return portfolioData;
        }
    })
};
promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
})

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



