
const users = [
    {
        email: "barii@gmail.com",
        password: "123456"
    }
]
// Get all users 
const getUsers = (req,res)=>{
    res.send(users);
}

// create a user 
const createUser = (req,res)=>{
    const user = {
        email:req.body.email,
        password:req.body.password
    }
    users.push(user);

    res.send({'message':'User Added !','data': user})
}

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;