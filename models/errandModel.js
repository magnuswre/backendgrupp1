const { populate } = require('../schemas/errandSchema');
const Errand = require('../schemas/errandSchema');

// POST
exports.postErrand = (req, res) => {
    const { email, subject, message, status, comment } = req.body
    if(!email || !subject || !message){
        return res.status(400).json({
             message: "all fields are required"
        })
     }
     if(status < 1 || status > 3 ) {
        return res.status(400).json({
            message: "Unavailable status!"
       })
     }
    Errand.create({ email, subject, message, status, comment })
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong" })) 
   }


// GET 

exports.getErrands = (req, res) => {
    Errand.find()
    .populate('comment')
    .populate('status')
    .exec()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting all the errands" })) 
}


// GET ERRAND BY ID

exports.getOneErrand = (req, res) => {
    id  = req.params.id 
    Errand.findById(id)
    .populate('comment')
    .populate('status')
    .exec()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting specific the errand" })) 
}




// PUT

exports.changeErrand = (req, res) => {
    const { email, subject, message, status, comment } = req.body

    id = req.params.id

    if(status < 1 || status > 3 ) {
        console.log('problem')
        return res.status(400).json({
            message: "Unavailable status!"
       })
     }
    
    Errand.findByIdAndUpdate(id, { email, subject, message, status, comment }, { new: true })
    .populate('comment')
    .exec()
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong" })) 
   }




// // DELETE

// exports.deleteErrand = (req, res) => {
//     Errand.find()
//     .then(data => res.status(200).json(data))
//     .catch(() => res.status(500).json({ message: "Something went wrong getting all the errands" })) 
// }

