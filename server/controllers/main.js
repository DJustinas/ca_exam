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
        user.title = title
        user.age = age
        user.email = email
        user.password = password

            user.save().then(data =>{
                console.log(data)
                res.send({success: true})
            })
    },
     getUsers: async (req, res) => {
        const users = await userDb.find()
         res.send({success: true, users})
     },

     updateUsers: async (req, res) => {
        userDb.findOneAndUpdate(
            {_id: req.body.id},
            {$set: {pass: req.body.pass}},
            {returnOriginal: false})
            .then(() =>{
                let newUserDb = userDb.find()
                res.send({error: false, message: "Slaptažodis sėkmingai pakeistas", info: newUserDb})
            }).catch(e => {
                res.send({error: true, message: e})
        })

     },

    deleteUser: async (req, res) => {
        await userDb.deleteOne({_id: req.params.id})
            .then(() => {
                let deletedUser = userDb.find()
                res.send({error: false, message: 'Ištrintas vartotojas', info: deletedUser})
            }).catch(e => {
                res.send({error: true, message: e})
            })
    }
}