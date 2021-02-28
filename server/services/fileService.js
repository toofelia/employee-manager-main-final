/* 
       Read and Write File Utility
       Commonjs Modules
       exports.funcName = ()=>{}

       import
       require('module name)
    
*/

const fs = require('fs')
const path = require('path')


exports.getFileContents = (filePath)=>{
   return JSON.parse(fs.readFileSync(path.join(__dirname, filePath)))
}

exports.writeFileContents = (filePath, data) =>{
    fs.writeFileSync(path.join(__dirname, filePath), JSON.stringify(data))
}


 

 