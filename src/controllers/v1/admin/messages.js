exports.createMessage = async (req, res) => {
    try {
        res.status(201).json({message: 'Message Created'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getMessage = async (req, res) => {
    try {
        res.status(200).json({message: 'Message Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getMessages = async (req, res) => {
    try {
        res.status(200).json({message: 'Messages Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.updateMessage = async (req, res) => {
    try {
        res.status(200).json({message: 'Message Updated'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        res.status(200).json({message: 'Message Deleted'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
