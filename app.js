const fs = require('fs');
const generatePage = require('./src/page-template');
// put the page data into an array that can be displayed, add info we add into in the second array spot 
const profileDataArgs = process.argv.slice(2, process.argv.length);
//sets the name and github usrname into profiledataargs
const [name, github] = profileDataArgs;
// html page with name and github passed in 

//writes html file with name and github input. 
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('portfolio complete! check out index.html to see the output!');
});




