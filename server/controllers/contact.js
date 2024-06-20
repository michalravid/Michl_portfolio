const Contact = require('../models/contact')

exports.addContact = async(req,res)=>{
    console.log(req.body);
    // const {id} = req.body;
    const contact = await Contact.create(req.body);
    res.json(contact)  
}

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error('Failed to get contacts:', error);
        res.status(500).json({ message: 'Failed to get contacts' });
    }
};