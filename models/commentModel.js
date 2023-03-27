const Comment = require('../schemas/commentSchema');


// POST
exports.postComment = (req, res) => {
    const { email, message, caseId } = req.body
    if(!email || !message || !caseId){
        return res.status(400).json({
             message: "all fields are required"
        })
     }
    Comment.create({ email, message, caseId })
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong" })) 
   }


// GET 

exports.getComments = (req, res) => {
    Comment.find()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting all the errands" })) 
}








