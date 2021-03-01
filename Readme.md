# Employee Manager Registration Login App 

### EJS TASKS
- Setup EJS with Node and Express
- Add the dashboard and the login to the views folder.
- Add slots to the login template for the password and email warnings.
- Send the template using res.render(template, {data})
- Update the index.html page anchor elements to point to the login get route.

### Login Service Returns User Object
- If value isValidUser true redirect to dashboard.
- Set cookie session variable to true.

### Login Service Returns NULL
- Render login template and add warnings messages.
- Adding client side javascript to template.


 ### Description
Validation includes: 
-- search input is not empty
-- there is a matchig result

A link to a working live demo: https://unruffled-leakey-607274.netlify.app/

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


 
  