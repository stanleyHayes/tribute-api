exports.createFAQ = async (req, res) => {
    try {
        res.status(201).json({message: 'FAQ Created'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getFAQs = async (req, res) => {
    try {
        res.status(200).json({message: 'FAQs Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getFAQ = async (req, res) => {
    try {
        res.status(200).json({message: 'FAQ Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

exports.updateFAQ = async (req, res) => {
    try {
        res.status(200).json({message: 'FAQ Updated'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.deleteFAQ = async (req, res) => {
    try {
        res.status(200).json({message: 'FAQ Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
