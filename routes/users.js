import express from 'express';

const router = express.Router();


// all routes will begin with 'users'
// so in response we can simplify it to '/'

router.get('/', (req, res) => {
    res.send("Hello from users page");
})

export default router;