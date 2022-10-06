exports.createAdmin = async (req, res) => {
    try {
        res.status(201).json({message: 'Admin Created'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getAdmins = async (req, res) => {
    try {
        res.status(200).json({message: 'Admins Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getAdmin = async (req, res) => {
    try {
        res.status(200).json({message: 'Admin Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

exports.updateAdmin = async (req, res) => {
    try {
        res.status(200).json({message: 'Admin Updated'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.deleteAdmin = async (req, res) => {
    try {
        res.status(200).json({message: 'Admin Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
