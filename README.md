# AlgoVerse

## About
---

Have you ever thought about... 

## *What is the space and time complexity in this algo?*

We have. Therefore, Team AlgoVerse's solution was to create a fun game focused on learning time and space complexity of algorithms. Learning gamified.

AlgoVerse is a learning tool for algorithms. It is intended to store a question bank of various algorithms and its corresponding time & space complexity. By creating an account, your __username__ (not encrypted) and __password__ (encrypted with *`bcrypt`*) as well as __session_id__ (generated with *`uuid`*), you can test your knowledge of time and space complexity for various algorithms as well as compete with your friends / colleagues.

## Installation
---

Fork this GitHub repository to your own account: https://github.com/algoverse1/AlgoVerse

<img src='./docs/assets/fork_it.png' width=auto height=auto/>

Clone this repo onto your local environment: 
```
git clone https://github.com/algoverse1/AlgoVerse.git
```

Install all dependencies
```
npm install
```

Create your own .env file inside of root directory `algo-verse`
``` 
touch .env
```

In your own `.env` file, enter your own database URI. For an example of an ElephantSQL hosted PostgreSQL database, see below*. For more information regarding ElephantSQL, visit https://www.elephantsql.com/.

```
DB_URI=postgres://ejoguiur:tCrCwCCB5IupuIcJK54LPEEIyUVtQsuB@kashin.db.elephantsql.com/ejoguiur
```
* There's no question bank nor any user data stored here!)*

When creating your own database, `AlgoVerse_postgres_create.sql` can be used to create your database schema.
```
AlgoVerse_postgres_create.sql
```
