# Employee Manager Registration Login App 

The application allows to create account and to signup to access a securely protected dashboard.
Also it has a page for displaying all registered users with their email, passwords, and ID.

The application is built with a client and server side validation.
A working demo: https://employee-manager-main-final.herokuapp.com

### Signup Service 
- If value isValidUser true redirect to login page.
- Set cookie session variable to true.

### Login Service 
- If value redirect to login page.
- Render login template and add warnings messages.
- Adding client side javascript to template.


 ### Description
Validation includes: 
-- search input is not empty
-- there is a matchig result



### Package.json
There are a few dependencies that are installed to make this app works:
--"ejs": "^3.1.5"
--"parcel-bundler": "^1.12.4"
-- "@babel/plugin-transform-runtime": "^7.12.10",

### Install Node Modules
commands to install npm parcel bundler:
  -- npm install -D parcel bundler
   --npm run dev
   --npm run build

### Files and Folders
src is a main folder and contains:
--css folder
      - styles.css
-- js folder
      - controllers folder
           - search-controller.js
      - models folder
           - alpha-vantage.js
      - views
           - results-view.js
           - search-view.js


 
  