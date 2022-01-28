
module.exports = {
    // ---- messages to admin ---- //
    getUserMessages: async (req,res) => {
        const { user_id } = req.params
        const db = req.app.get('db')
        const messages = await db.messaging.get_messages_from_user([user_id])
        return res.status(200).send(messages)
    },

    createMessage: async (req,res) => {
        const { user_id, text, message_discription, send_from } = req.body
        const db = req.app.get('db')
        const message = await db.messaging.add_message([user_id,text,message_discription,send_from])
        return res.status(200).send(message)
    },

    deleteMessage: async (req,res) => {
        const { message_id,user_id } = req.body
        const db = req.app.get('db')
        const query = await db.messaging.delete_message([message_id])
        return res.status(200).send(query)
    },
    // --------------------------------- //

    // ---- site messaging system below ---- //
    getConversationByUserId: async (req,res) => {
        const { user_id } = req.body
        const db = req.app.get('db')
        const conversations = await db.messaging.get_conversations_by_user_id([user_id])
        return res.status(200).send(conversations)
    }
}