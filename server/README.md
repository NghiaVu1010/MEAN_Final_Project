# HCA server

This is the back-end server we created in Lab3 to be used for front end applications (Angular). Template using express-generator. The pages will be created in Angular and use this as the back-end.

## Install Module
```
$ npm install
```

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

## Start Server
```
$ cd server
$ npm start
```

### Routes/Contract
#### Leagues
```
GET - http://localhost:3000/leagues/data
* req -
* res - All Leagues
```

#### Teams
```
GET - http://localhost:3000/teams/data
* req -
* res - All Teams

GET - http://localhost:3000/teams/data/byleague/:id
* req - req.params.id 
* res - Teams by League
```

#### Users
```
GET - http://localhost:3000/users/data
* req -
* res - All Non-admin Users

GET - http://localhost:3000/users/data/:id
* req - req.params.id
* res - Single user data

POST - http://localhost:3000/users/login
* req - { username: req.body.username, 
          password: req.body.password
        }
* res - Login User

POST - http://localhost:3000/users/register
* req - { username: req.body.username,
          email: req.body.email,
          password: req.body.password
        }
* res - Login User

PUT - http://localhost:3000/users/settings/:id
* req - { id: req.params.id, 
          email: req.body.email
        }
* res - Updated User

DELETE - http://localhost:3000/users/settings/:id
* req - req.params.id
* res - Deleted user
```

### Test
+ run ```npm start```
+ Test using Postman Collection

### Useful link(s)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Generator](https://expressjs.com/en/starter/generator.html)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](http://docs.sequelizejs.com/)
