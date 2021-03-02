# Employee Manager Registration Login App 

The application allows to create account and to signup to access a securely protected dashboard.
Also it has a page for displaying all registered users with their email, passwords, and ID.

The application is built with a client and server side validation.
A working demo: https://employee-manager-main-final.herokuapp.com

### Signup Service 
-- signup.ejs includes a form for registrationn that requires username, email, and password from a user
-- signup_form.js on the client includes validation function.
- If values for all inputs are not empty and have a required length, it send data to server.
-- signupService.js checks if there is no the same user in the users.json and assigns uuid to a new user
-- If there is no user, it adds it to data with a uuid.
-- index.js renders  an empty form with app.get while app.post creates creadentials with user's data. 
-- Finally, after validation, we redirect user to the login page

### Login Service 
- If value redirect to login page.
- Render login template and add warning messages.
- Adding client side javascript to template.


 ### Users Output
-- Users page displays all regestred users
-- It is build on a client side with fetching data from users.json
-- In users.js there is an asynchronous request. When it returns, it renders data.


Validation includes: 
-- search input is not empty
-- there is a matching result


### Package.json
There are a few dependencies that are installed to make this app works:
-- express-validator for server validation
-- ejs 
-- express-session for a protected route
-- uuid for unique user ID
-- cors for accessing  other client application

### Install Node Modules
commands to install npm parcel bundler:
  -- npm install 
  -- npm install ejs cookie-session
  -- npm install express-validator
  -- npm install express-session
  -- npm install uuid
  -- npm install cors
   --npm run server

### Files and Folders
a client-side part contains:

--client
  --assets
      - svgs
  --css
      - styles.css
      - styles.css.map
  --js
    -  login_form.js
    -  signup_form.js
    -  users.js
   --scss


a server-side part contains:
--server
  --css folder
  -- data
      - employees.json
      - users.json 
  -- services
      - fileServices.js
      - loginService.js
      - signupService.js
  --views
      - dashboard.ejs
      - login.ejs
      -signup.ejs
  - index.js
  - package.json
  - Procfile

 
  