module.exports = (req, res, next) => {
    const {
        title,
        age,
        email,
        password
    } = req.body

    function errorSend(message) {
        res.send({success: false, message})
    }

    if(typeof title !== 'string') {
        return errorSend('Neturi būti skaičių')
    }
    if(typeof age !== "number") {
        return errorSend('Neturi būti raidžių')
    }
    if(typeof email !== 'string') {
        return errorSend('Neturi būti skaičių')
    }
    if(typeof password !== 'string') {
        return errorSend('Neturi būti skaičių')
    }
 next()
}