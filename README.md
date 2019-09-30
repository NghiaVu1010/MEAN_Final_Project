# MEAN_Final_Project

# Iron Chef Tournament

## Goal
  Iron Chef is a cooking competition that pits you in a gauntlet against other rival teams. Sign up and compete to see who will be crowned the next King of Iron Chef!
  
## Audience
- Cooking leaders/managers
- Any cooking levels welcome

## Site Pages:
- Home Page
- Login Page
- Register Page
- Teams Page (Landing Page)
- Edit User Profile Page
- Admin Page (For an Admin.  Details non-admin users)
  
## Technologies
 * HTML / CSS3/ Bootstrap4
 * REST API
 * Node.js
 * Angular
 * PostgreSQL
 * Express
  
## Authors
  Neo

## Setup
Clone / Fork / Download Repo then run ```npm install``` for Client/Server.

## PostgreSQL Setup
+ username: hca
+ password: password
+ creds: DBA

+ Create PostgreSQL DB User as defined above
+ Create a DB named demo in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

### To Start/Stop
```
# To start server
  npm start
  or
  npm run dev (inspect mode)
  
# To start Angular
  ng serve

# To stop
  Ctrl + C
```

### Server App
[http://localhost:3000/](http://localhost:3000/)

### Angular App (Browser)
+ Ensure Node Server is started! 

[http://localhost:4200/](http://localhost:4200/)

## Acknowledgments

* Robert
* Sara
* Dana

## Reporting issues
Use [Github's Issues section for this repository](https://github.com/NghiaVu1010/MEAN_Final_Project/issues) to report any issues with the notes.

Examples of the kind of issues that may need reporting:
+ Typos
+ Code samples not working as described
+ Broken or moved links
+ Etc.
