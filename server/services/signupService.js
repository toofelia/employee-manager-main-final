/* 
  Login Service Will Authenticate an email and password
  return a true or false response.
  false returns will keep users on the login page with errors
  true will redirect user to the dashboard.html
*/

const fileService = require('./fileService')
const filename = '../data/users.json';

const { v4: uuidv4 } = require('uuid');

// common js module  import === require
// export import es modules  Browser...
// exports or module.exports  requre commonjs  NODE (BUNDLER RUN BROWSER)
exports.signup = (credential)=>{
 
   const {username, email, password} = {...credential}
   const users = fileService.getFileContents(filename);
   // flush the authentication
   
   const checkUser =  users.reduce((result, user)=>{
     
    if(user.email == email){
      result.emailExists = true;
    }    
    if(user.username == username){
        result.userExists = true;
      }    
      return result

   }, {emailExists: false, userExists: false});

   if(!checkUser.emailExists && !checkUser.userExists) {
       credential.uid = uuidv4();
       users.push(credential);
       fileService.writeFileContents(filename, users);
       return {success: true, message: ("User " + username + " successfully registered.")};
   } else {
       return {success: false, message: ("Registration failed: " 
          + (checkUser.emailExists ? ("email " + email + " already exists") : "")
          + (checkUser.userExists ? ((checkUser.emailExists ? "; " : "") + "user " + username + " already exists"): ""))};
   }

}
 
