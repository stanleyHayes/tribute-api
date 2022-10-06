const FAQ = require("./../../../models/v1/faq");

exports.getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find({}, {question: 1, answer: 1});
        res.status(200).json({message: 'FAQ Retrieved', faqs});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
