exports.createProduct = async (req, res) => {
    try {
        res.status(201).json({message: 'Product Created'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getProducts = async (req, res) => {
    try {
        res.status(200).json({message: 'Products Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getProduct = async (req, res) => {
    try {
        res.status(200).json({message: 'Product Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

exports.updateProduct = async (req, res) => {
    try {
        res.status(200).json({message: 'Product Updated'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.deleteProduct = async (req, res) => {
    try {
        res.status(200).json({message: 'Product Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
