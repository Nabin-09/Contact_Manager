//desc Get all contacts
//@route GET /api/contacts
//Access public

const getContact = (req ,res)=>{
    res.status(200).json({message : `Get all contacts`})
};

//desc Create New Contact
//@route POST /api/contacts
//Access public

const createContact = (req ,res)=>{
    res.status(201).json({message : `Get all contacts`})        
};

module.exports = {getContact , createContact}