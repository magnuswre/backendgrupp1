const Comment = require('../schemas/commentSchema');
const Errand = require('../schemas/errandSchema')


// POST
exports.postComment = (req, res) => {
    const { email, message, caseId } = req.body
    if(!email || !message || !caseId){
        return res.status(400).json({
             message: "all fields are required"
        })
     }


    Comment.create({ email, message, caseId })
    .then(data => {
        Errand.findByIdAndUpdate(caseId, { $push: { comment: data._id }})
        .then(() => {
            res.status(201).json(data)
        })
        .catch(() => res.status(500).json({ message: "Something went wrong with pushing to Errand " })) 
    })
    .catch(() => res.status(500).json({ message: "Something went wrong with pcreating the message" })) 
   }


// GET 

exports.getComments = (req, res) => {
    Comment.find()
    .populate('caseId')
    .exec()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting all the errands" })) 
}








