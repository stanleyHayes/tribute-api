exports.createUser = async (req, res) => {
    try {
        res.status(201).json({message: 'User Created'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getUsers = async (req, res) => {
    try {
        res.status(200).json({message: 'Users Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getUser = async (req, res) => {
    try {
        res.status(200).json({message: 'User Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.updateUser = async (req, res) => {
    try {
        res.status(200).json({message: 'User Updated'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.deleteUser = async (req, res) => {
    try {
        res.status(200).json({message: 'User Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
