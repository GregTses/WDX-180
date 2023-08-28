---
title: Week 19
---

# Week 19 | Node.js 2, NoSQL Databases & Docker

_(Updated: 28/08/2023)_

## Week 19 - Day 1

  ### Schedule

  ### Study Plan

  Watch the following videos which give a thorough explanation on what JWT (Jason Web Token) is, how to properly configure it for user authentication and how to authorize users with specific permissions and roles.

  **What you'll learn:**

  - What is a JWT.
  - How to use it for authenticating a user on a web app.
  - How to create Access and Refresh tokens for a complete implementation of the JWT authentication pattern.
  - How to create protected routes and permit only logged in users to access them.
  - What is the difference between Authentication and Authorization.
  - How to define different User Roles
  - How to allow access on specific protected routes depending on a user's role.

  **Here's the watch list**

  - [Watch **JWT Authentication**](https://www.youtube.com/watch?v=favjC6EKFgw)
    - Duration: 60min
    - Level: Beginner
    - Caption: Yes
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>JWT Authentication</li>
          <li>Create environment variables</li>
          <li>Create JWT tokens at authorization</li>
          <li>Create JWT verification middleware</li>
          <li>Apply JWT token verification to routes</li>
          <li>Add cookie-parser middleware</li>
          <li>Create a refresh token controller</li>
          <li>Create a logout controller</li>
          <li>Frontend: fetch needs the credentials option </li>
          <li>Backend: CORS needs Access-Control-Allow-Credentials</li>
        </ul>
      </details>

  - [Watch **User authorization**](https://www.youtube.com/watch?v=fUWkVxCv4IQ)
    - Duration: 29min
    - Level: Beginner
    - Caption: Yes
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>Authentication vs Authorization</li>
          <li>Configure the User Roles</li>
          <li>Add roles to the user data model</li>
          <li>Add a user role at registration</li>
          <li>Add user roles to access token</li>
          <li>Update the verifyJWT middleware to include roles</li>
          <li>Create a verifyRoles middleware</li>
          <li>Test routes with Thunder Client</li>
        </ul>
      </details>

  ### Summary
  ### Exercises

  - Create a working version of each video's code structure and push them to your corresponding GitHub repository.
  - Complete any assignment suggested by the instructor on each video.

  ### [Extra Resources](EXTRAS.md)
  
  ### Sources and Attributions

  - [NodeJS Official Site](https://nodejs.org/)
  - [NPM Official Site](https://www.npmjs.com/)
  - [ExpressJS Official Site](https://expressjs.com/)
  - [NPM: CORS package](https://www.npmjs.com/package/cors)
  - [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  - [Thunder Client Official Site](https://www.thunderclient.com/)
  - [NPM: bcrypt package](https://www.npmjs.com/package/bcrypt)
  - [How to safely store a password](https://codahale.com/how-to-safely-store-a-password/)
  - [MDN: HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  - [NPM: jsonwebtoken package](https://www.npmjs.com/package/jsonwebtoken)
  - [NPM: cookie-parser package](https://www.npmjs.com/package/cookie-parser)
  - [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
  - [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)
  - [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
  - [Intro to JWT](https://jwt.io/introduction)
  - [All You Need to Know About Storing JWT in the Frontend](https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id)
  - [Deleting Cookies](http://expressjs.com/en/api.html#res.clearCookie)

## Week 19 - Day 2

  ### Schedule

  ### Study Plan

  Watch the following videos which give an introduction to the MongoDB NoSQL database and the MongooseJS package. 

  **What you'll learn:**

  - What are SQL and NoSQL databases and their key differences.
  - What are the MongoDB advantages over SQL databases.
  - How to create a MongoDB database on the cloud.
  - How to use an actual database on your app's endpoints.
  - How to use the MongooseJS package to interact with MongoDB.

  **Here's the watch list**

  - [Watch **Intro to MongoDB and MongooseJS**](https://www.youtube.com/watch?v=-PdjUx9JZ2E)
    - Duration: 17min
    - Level: Beginner
    - Captions: Yes
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>What is NoSQL and MongoDB?</li>
          <li>Create a MongoDB database and a database User</li>
          <li>Set up database connection using environment files (.env)</li>
          <li>Install mongoose dependency</li>
          <li>Connect app to MongoDB</li>
        </ul>
      </details>

  - [Watch **MongoDB Schemas and Data Models**](https://www.youtube.com/watch?v=jZ-dzj6ut54)
    - Duration: 21min
    - Level: Beginner
    - Captions: Yes
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>Create an Employee schema</li>
          <li>Create an Employee data model</li>
          <li>Create a User schema</li>
          <li>Create a User data model</li>
          <li>Refactor the register controller with the User data model</li>
          <li>View the new user data at MongoDB.com</li>
        </ul>
      </details>

  ### Summary

  ### Exercises

  - Create a working version of each video's code structure and push them to your corresponding GitHub repository.
  - Complete any assignment suggested by the instructor on each video.

  ### [Extra Resources](EXTRAS.md)
  
  ### Sources and Attributions
  - [NodeJS Official Site](https://nodejs.org/)
  - [NPM Official Site](https://www.npmjs.com/)
  - [ExpressJS Official Site](https://expressjs.com/)
  - [NPM: CORS package](https://www.npmjs.com/package/cors)
  - [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  - [Thunder Client Official Site](https://www.thunderclient.com/)
  - [NPM: bcrypt package](https://www.npmjs.com/package/bcrypt)
  - [How to safely store a password](https://codahale.com/how-to-safely-store-a-password/)
  - [MDN: HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  - [NPM: jsonwebtoken package](https://www.npmjs.com/package/jsonwebtoken)
  - [NPM: cookie-parser package](https://www.npmjs.com/package/cookie-parser)
  - [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
  - [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)
  - [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
  - [Intro to JWT](https://jwt.io/introduction)
  - [All You Need to Know About Storing JWT in the Frontend](https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id)
  - [Deleting Cookies](http://expressjs.com/en/api.html#res.clearCookie)
  - [MongoDB Official Site](https://www.mongodb.com/)
  - [MongooseJS Official Site](https://mongoosejs.com/)
  - [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)

## Week 19 - Day 3

  ### Schedule

  ### Study Plan

  Watch the following video which demonstrates how to eventually create a fully fledged Web App with Async CRUD(Create-Read-Update-Delete) operations and deploy it on a web hosting service (Glitch).

  **What you'll learn:**

  - How to properly configure all CRUD operations for every entity on your app.
  - How to deploy your app on Glitch.

  **Here's the watch list**

  - [Watch **MongoDB Async CRUD Operations**](https://www.youtube.com/watch?v=AWlLhRQJvtw)
    - Duration: 35min
    - Level: Beginner
    - Captions: Yes
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>Replace the old database simulation with MongoDB schemas and models on all routes</li>
          <li>Create a new employee</li>
          <li>Read (get) an employee or all employees</li>
          <li>Update an employee</li>
          <li>Delete an employee</li>
          <li>Create User Admin routes</li>
          <li>Deploy the REST API on Glitch</li>
        </ul>
      </details>

  ### Summary

  ### Exercises

  - Create a working version of each video's code structure and push them to your corresponding GitHub repository.
  - Complete any assignment suggested by the instructor on each video.

  ### [Extra Resources](EXTRAS.md)
  
  ### Sources and Attributions
  - [NodeJS Official Site](https://nodejs.org/)
  - [NPM Official Site](https://www.npmjs.com/)
  - [ExpressJS Official Site](https://expressjs.com/)
  - [NPM: CORS package](https://www.npmjs.com/package/cors)
  - [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  - [Thunder Client Official Site](https://www.thunderclient.com/)
  - [NPM: bcrypt package](https://www.npmjs.com/package/bcrypt)
  - [How to safely store a password](https://codahale.com/how-to-safely-store-a-password/)
  - [MDN: HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  - [NPM: jsonwebtoken package](https://www.npmjs.com/package/jsonwebtoken)
  - [NPM: cookie-parser package](https://www.npmjs.com/package/cookie-parser)
  - [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
  - [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)
  - [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
  - [Intro to JWT](https://jwt.io/introduction)
  - [All You Need to Know About Storing JWT in the Frontend](https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id)
  - [Deleting Cookies](http://expressjs.com/en/api.html#res.clearCookie)
  - [MongoDB Official Site](https://www.mongodb.com/)
  - [MongooseJS Official Site](https://mongoosejs.com/)
  - [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
  - [Glitch Official Site](https://glitch.com/)

## Week 19 - Day 4

  ### Schedule

  ### Study Plan

  Read the following document which gives an introduction to Containers and Docker.

  **What you'll learn:**

  - What are containers
  - What is Docker
  - Why is it so widely used
  - How to 'dockerize' your first NodeJS app

  **Some of the questions you'll be able to answer:**

  - Are containers Virtual Machines (VMs)?
  - What are the benefits of using containerized applications?
  - What's the difference between containers and images?
  - Is Docker platform agnostic?

  **Here's the document**

  [Containers and Docker](resources/Containers_and_Docker/README.md)

  ### Summary

  ### Exercises

  Complete the tutorial on the NodeJS official site (link in Containers and Docker document) and push it on your GitHub account

  ### [Extra Resources](EXTRAS.md)
  
  ### Sources and Attributions

  [List](resources/Containers_and_Docker/README.md#sources-and-attributions)

## Week 19 - Day 5

  ### Schedule

  ### Study Plan

  Read the following document which gives an introduction to 'docker-compose' and how to run multiple containers with Docker

  **What you'll learn:**

  - What is docker compose
  - How to use docker compose
  - How to run multiple docker containers

  **Here's the document**

  [Docker Compose](resources/Docker_Compose/README.md)

  ### Summary

  ### Exercises

  Fully containerize the app that you've built the past two weeks and push on your GitHub the required configurations files along with instructions (e.g. in README.md file) on how to properly run the app using only Docker.

  ### [Extra Resources](EXTRAS.md)
  
  ### Sources and Attributions

## Week 19 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).