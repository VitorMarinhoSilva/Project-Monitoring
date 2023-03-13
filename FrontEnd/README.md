# Project Monitoring
![Build Framework](https://img.shields.io/static/v1?label=NestJS&message=framework&color=red&style=for-the-badge&logo=Nestjs) ![Build Status](https://img.shields.io/static/v1?label=STATUS&message=Done&color=GREEN&style=for-the-badge) [![Build Deploy](https://img.shields.io/static/v1?label=Azure&message=Deploy&color=blue&style=for-the-badge&logo=MicrosoftAzure)](https://travis-ci.org/joemccann/dillinger) 
![Build Framework](https://img.shields.io/static/v1?label=React&message=framework&color=blue&style=for-the-badge&logo=React) ![Build Framework](https://img.shields.io/static/v1?label=JavaScript&message=framework&color=blue&style=for-the-badge&logo=JavaScript)

### :pushpin: Topics
- [Project Monitoring](#time-sheet)
    - [:pushpin: Topics](#pushpin-topics)
  - [:scroll: Project Description](#scroll-project-description)
  - [:hammer: Features](#hammer-features)
    - [Backend:](#backend)
    - [Frontend:](#frontend)
  - [Technical Prerequisites](#technical-prerequisites)
  - [How to run the application](#how-to-run-the-application)

## :scroll: Project Description
Project Monitoring is a project made with the objective of monitoring other applications regardless of what their repositories are, thus being able to avoid major problems if any application crashes.

## :hammer: Features

### <font color= 1A7DCF >Backend</font>:

- #### :file_folder: <font color= CF6F1A >Api.js</font>
    This code is an implementation of a server using the Node.js runtime and the Express.js framework. It has two endpoints, '/Email' and '/login', and uses several third-party libraries such as nodemailer, cors, axios, and nodemailer-express-handlebars.

    The '/Email' endpoint receives a POST request with data containing a URL that was accessed and, in case of an error (status code greater than 300), sends an email to a specified email address using Nodemailer and Handlebars. The email is sent using Gmail SMTP server settings.

    The '/login' endpoint also receives a POST request with data containing an array of objects with information needed to make API calls. It iterates over this array and checks whether a 'clientid' key exists on each object. If it does, it makes an access token request and then makes an API call using the access token returned. If it does not, it makes a direct API call. Objects with information about the calls made to APIs are added to an array. If a call returns a status code other than 200, the code sets a status variable to the status code returned in the response and adds the current calling object's information to the array. After a delay of 5 seconds, the code checks if any of the calls made returned a status code greater than 300. If so, it sends an email to the specified email address using Nodemailer and Handlebars.

    Overall, this code is a simple implementation of a server with error monitoring functionality that sends an email in case of errors.
   
- #### :file_folder: <font color= CF6F1A >Views</font>
    -:wrench: <font color= CF6F1A >template.hbs</font>: 
    This is an HTML email template that includes a table with information about the status of one or more servers. The template is written using Handlebars, a templating language that allows for dynamic content generation.

    The template includes placeholders for the current date and the URL and status of each server. The table is formatted using inline CSS, with specific font styles and padding settings. The content of the email is left-aligned.

    The template also includes commented-out code for an additional status message for each server.


### <font color= 1A7DCF >Frontend:</font>

<!-- - #### :file_folder: <font color= CF6F1A >Components</font> -->

- #### :file_folder: <font color= CF6F1A >Pages:</font>
    - :wrench: <font color= CF6F1A >Main.js</font> : 
        This is a React component named "Main" that includes two React hooks to manage state: "useState" and "useEffect". The component also imports some external modules such as "axios" to make API calls and some static images for the frontend. The component displays a list of projects and their status.

        The initial state of the component includes an empty array for "arrayBase" and "url", and "haveCatch" is set to true. The "options" array includes two HTTP methods: GET and POST.

        The "Info" array includes two objects with properties such as "nome" (name), "url" (URL), "req" (HTTP request method), "status" (HTTP response status), and "link" (link to be displayed in the frontend). The second object has a URL for the Python organization and uses the GET method.

        The "useEffect" hook is used to make an API call to the server when the component mounts, using the "axios" module. The response data is then stored in the "arrayBase" state.

        The "verifyLenght" function is used to iterate through the "arrayBase" and count the number of projects with a status greater than or equal to 300.

        The component renders a section with a header and a list of projects. The "arrayBase" state is mapped over to display each project's name, HTTP request method, URL, and status. The status is displayed as an image of a green globe for statuses less than 300 and a red globe for statuses greater than or equal to 300.
    

- :wrench: <font color= CF6F1A >App.js</font> :
        The `App` function creates and determines the routes of our application
    
- :wrench: <font color= CF6F1A >index.js</font> :


## Application Deployment.

## Technical Prerequisites
Before starting you need to have installed the following components:

- :computer: [VSCode](https://code.visualstudio.com/) (or another IDE of your choice)
- :computer: [React](https://pt-br.reactjs.org/) React to build your frontend.
- :computer: [JavaScript/Node.js](https://nodejs.org/en/) TypeScript is a strongly typed programming language that builds on JavaScript.


## How to run the application

- In your files directory give `npm install` to install the <font color= CF6F1A >package.json</font> file dependencies (both backend and frontend).

- In your terminal run the following command for start backend `node Api.js` and in FrontEnd `npm start`

