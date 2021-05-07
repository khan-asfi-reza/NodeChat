// Get Database
const db = require("../Config/db");
//Database Users
const user = db.users;
// Operations of database
const op = db.Sequelize.Op;
// Encryption Module
const bcrypt = require("bcrypt");

// User Create Method
exports.createUser = async(req, res) => {
    // Get all data from post request
    const {username, password, email, full_name} = req.body;
        // If post method req body is full
        if(user && password && email && full_name){
            // Check if user exists
            user.findAll({where: {
                [op.or]  : [{username: username},{email:email}] 
            } })
                // if exists send user exists code
                .then(async(data) => {
                    if(data.length){
                        res.status(400).send({
                            "code": 0,
                            "message": "User with username already exists"
                        })
                    }else{
                        // Salt Password
                        const salt = await bcrypt.genSalt(10);
                        // New Password
                        const newPassword = await bcrypt.hash(password, salt);
                        const newUser = {
                            username: username,
                            password: newPassword,
                            email: email,
                            full_name: full_name
                        }
                        // Create User and Send Data
                        user.create(newUser)
                            .then((data) => {
                                res.send(data);
                            }).catch((e)=>{
                                res.status(500).send({
                                    message : "Error sending data"
                                })
                            })
                    }
                })
        }
}