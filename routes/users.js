import express from 'express';

const router = express.Router();


const users = [
   { 
    firstName: "John",
    lastName : "Doe",
    age : 25
   }
]

// I don't need '/users' becuase 
// all routes will start with 'users'
// so I can abbreviate it with just '/'
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
})

export default router