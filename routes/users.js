import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router();




// I don't need '/users' becuase 
// all routes will start with 'users'
// so I can abbreviate it with just '/'
router.get('/', getUsers);

// creating a user
router.post('/', createUser);

// fetching a user by id { id: 1 }
// /users/1 => req.params
router.get('/:id', getUser)

// deleting a user by id
router.delete("/:id", deleteUser)

// patch request to edit the details to a specfic user
// put is used when you wnat ot overide
// patch is for partial modification
router.patch('/:id', updateUser);


export default router