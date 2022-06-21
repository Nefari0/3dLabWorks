
module.exports = {
    // ---- messages to admin ---- //
    getUserMessages: async (req,res) => {
        // const { user_id } = req.params
        const db = req.app.get('db')
        const messages = await db.messaging.to_admin.get_messages_from_user()
        return res.status(200).send(messages)
    },

    createMessage: async (req,res) => {
        // const { user_id, text, message_discription, send_from } = req.body
        const { messageContent,email,visited } = req.body
        const db = req.app.get('db')
        const message = await db.messaging.to_admin.add_message([messageContent,email,visited])
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
        const { user_id } = req.params
        const db = req.app.get('db')
        const conversations = await db.messaging.get_conversations_by_user_id([user_id])
        return res.status(200).send(conversations)
    },

    getConversationMessagesById: async (req,res) => {
        const { conversation_id } = req.params
        const db = req.app.get('db')
        const messages = await db.messaging.get_conversation_messages_by_id([conversation_id])
        return res.status(200).send(messages)
    },

    createNewConversation: async (req,res) => {
        const { text,to_user,user_id } = req.body
        const content = text
        // console.log('create conversation','to user = ',to_user,'   and user_id = ',user_id)
        const conversation_name = 'testing'
        const db = req.app.get('db')
        const newConversation = await db.messaging.create_new_conversation([conversation_name])
        const conversation = newConversation[0]
        // const { conversation_id } = conversation
        // console.log('messaging backend',user_id,to_user,conversation_id)
        
        const userConversationFrom = await db.messaging.create_user_conversation([to_user,conversation['conversation_id'],user_id])
        const fromUser = userConversationFrom[0]
        const userConversationTo = await db.messaging.create_user_conversation([user_id,conversation['conversation_id'],to_user])
        const toUser = userConversationTo[0]
        
        const data = await db.messaging.create_conversation_message([user_id,conversation['conversation_id'],text])
        console.log('message in backend',data[0])
        
        const message = {
            conversation_id:data[0].conversation_id,
            user_id:user_id,
            to_user:to_user,
            content:content    
        }
        return res.status(200).send(message)

    },

    sendMessage: async (req,res) => {
        const db = req.app.get('db')
        const { user_id,conversation_id,text,to_user } = req.body
        console.log('sending message backend',user_id,to_user)
        const conversation = await db.messaging.create_conversation_message([user_id,conversation_id,text])
        const stampId = await db.messaging.mark_as_read([to_user,conversation_id])
        const info = conversation[0]
        return res.status(200).send(info)
    },

    checkExisting: async (req,res) => {
        const db = req.app.get('db')
        const { id,user_id } = req.body
        const existingMessages = await db.messaging.check_for_existing_message([id,user_id])
        const existing = existingMessages[0]
        
        if(existing === undefined){
            console.log('does not exist',id,user_id)
            return res.status(404).send('there are not messages yet')
        }
        const { conversation_id } = existing
        const messages = await db.messaging.get_conversation_messages_by_id_desc([conversation_id])

    
        return res.status(200).send({messages,conversation_id})
        
    },

    markAsRead: async (req,res) => {
        const db = req.app.get('db')
        const {conversation_id,to_user} = req.body
        const gotRead = await db.messaging.mark_as_read([to_user,conversation_id])
        return res.status(200).send(gotRead)
    }
}