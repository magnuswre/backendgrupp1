const Errand = require('../schemas/errandSchema');


// POST
exports.postErrand = (req, res) => {
    const { email, subject, message, status } = req.body
    if(!email || !subject || !message){
        return res.status(400).json({
             message: "all fields are required"
        })
     }
    Errand.create({ email, subject, message, status })
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong" })) 
   }


// GET 

exports.getErrands = (req, res) => {
    Errand.find()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting all the errands" })) 
}



// PUT 

// DELETE



