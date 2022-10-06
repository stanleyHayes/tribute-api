exports.createOrder = async (req, res) => {
    try {
        res.status(201).json({message: 'Order Created'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getOrders = async (req, res) => {
    try {
        res.status(200).json({message: 'Orders Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getOrder = async (req, res) => {
    try {
        res.status(200).json({message: 'Order Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

exports.updateOrder = async (req, res) => {
    try {
        res.status(200).json({message: 'Order Updated'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.deleteOrder = async (req, res) => {
    try {
        res.status(200).json({message: 'Order Retrieved'});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
