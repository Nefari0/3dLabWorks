
module.exports = {
    getUserMessages: async (req,res) => {
        console.log('hit controller')
        const { user_id } = req.params
        const db = req.app.get('db')
        const messages = await db.messaging.get_messages_from_user([user_id])
        return res.status(200).send(messages)
    }
}