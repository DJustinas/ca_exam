const userDb = require('../schemas/userSchema')

module.exports = {
    saveUser: (req, res) => {
        const {
            title,
            age,
            email,
            password
        } = req.body


        const user = new userDb
        user.title = title,
        user.age = age,
        user.email = email,
        user.password = password,

            user.save().then(data =>{
                console.log(data)
                res.send({success: true})
            })


        console.log(req.body)
        console.log('sup')
    }
}