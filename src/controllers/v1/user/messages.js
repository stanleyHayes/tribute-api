const Message = require("./../../../models/v1/message");
exports.createMessage = async (req, res) => {
    try {
        const {firstName, lastName, email, phone, subject, message, country, city} = req.body;

        res.status(201).json({message: 'Message Created'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
