const fs = require('fs');


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error, then reject the promise and send the errir the the promise catch
            if (err){
                reject(err);
                //return out of the function to make sure the promise doesnt accidently execute the resolve() as well. 
                return;
            }
            //if everything went well, resolve the promise and send teh succesull data to the `.then()`
            resolve({
                ok: true,
                message: 'file created!'
            });
         })
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'style sheet created!'
            })
        })
    })
}

module.exports = {writeFile, copyFile};