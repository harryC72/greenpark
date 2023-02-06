## GREENSPARK APP

** ** #install dependencies
npm install

** ** #serve both Vue app and Express backend 
npm run dev

** ** #run tests 
npm run test

This is a small fullstack app built in Vue and Node/Express.js. The frontend Javascript code is written in Typescript.  The express-app serves an 
array of products which are displayed in the Vue-application. The Vue-app is found on the following url: "http://localhost:5173/". The user can interact with the products and change color, status (active/inactive) and linked states. 

You run the application by writing "npm run dev" in the console on the applications root level. 
There are tests for the backend which you run by writing "npm run test" in the console on the root level. 

** ** Notes from the creator:

I only set up a small express server. The products are saved in memory. The next step is to connect the server with a database to store the products. I am handling error on the get request to the server. Errors on the post request are only logged. That is something to discuss how to handle. Maybe with a message box telling the user that the server is overloaded or something on those lines. 





