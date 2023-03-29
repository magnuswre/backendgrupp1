const Status = require('../schemas/statusSchema');



// POST
exports.postStatus = (req, res) => {
    const { _id, message } = req.body
    if(!_id || !message){
        return res.status(400).json({
             message: "all fields are required"
        })
     }
    Status.create({ _id, message })
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong" })) 
   }

   exports.getStatuses = (req, res) => {
    Status.find()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting all the statuses" })) 
}










