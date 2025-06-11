import { v4 as uuidv4 } from 'uuid';


let users = []; 

export const createUser = (req, res) => {
    const user = req.body;

    const newUser = { ...user, id: uuidv4()};

    users.push(newUser)

    res.send(`User with the name ${user.firstName} has been added`);
}

export const getUsers = (req, res) => {
    console.log(users);

    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`user with ${id} has been deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).send(`User with id ${id} not found`);
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with an id of ${id} has been updated`);
}