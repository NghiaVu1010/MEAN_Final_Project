# MEAN_Lab5

In this Lab, we connecting the back-end server we created in Lab3 to be used for front end applications. Template using express-generator and hbs. The pages will be rendered in hbs.

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

### Launch App
* Index [http://localhost:3000/](http://localhost:3000/) in your browser
* User Login [http://localhost:3000/users/login](http://localhost:3000/users/login) in your browser
* User Registration [http://localhost:3000/users/register](http://localhost:3000/users/register) in your browser

## Test
+ run ```npm start```
+ Test using Postman Collection

## Useful link(s)
* [Express Generator](https://expressjs.com/en/starter/generator.html)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](http://docs.sequelizejs.com/)