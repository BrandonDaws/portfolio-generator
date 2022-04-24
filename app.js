const inquirer = require('inquirer');


const promptUser = () => {
return inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?: (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Your Github Username:(Required) ',
        validate: usrName => {
            if (usrName) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" sections?',
        default: 'true'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself please: ',
        when: ({confirmAbout}) => {
            if (confirmAbout){
                return true;
            } else {
                return false;
            }
        }
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
            message: 'what is the name of your project?',
            validate: projName => {
                if (projName) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a brief description of your project: (Required)',
            validate: descripInput => {
                if (descripInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
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
            message: 'Enter the Github link to your project. (required)',
            validate: urlInput => {
                if (urlInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
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



