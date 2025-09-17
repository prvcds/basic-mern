const Message = require("../models/Message");

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } 
    catch (err){
        res.status(500).json({ error: err.message });
    }
};

const createMessages = async (req,res) => {
    try {
        if (!req.body.text){
            return res.status(400).json({error: "Message text is required"});
        }
        const newMessage = new Message({ text: req.body.text});
        await newMessage.save();
        res.json(newMessage);
    }
    catch (err){
        res.status(500).json({ error: err.message});
    }
};

module.exports = {getMessages, createMessages};