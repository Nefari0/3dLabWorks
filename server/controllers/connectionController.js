module.exports = {
    getUserFriends: async (req,res) => {
        const { user_id } = req.params
        // const user_id = id
        // console.log('hit friends',re/q.params)
        const db = req.app.get('db')
        const friends = await db.friends.get_user_friends([user_id])
        return res.status(200).send(friends)
    },

    getFriendInfo: async (req,res) => {
        const { user_id } = req.params
        const db = req.app.get('db')
        const friends = await db.friends.get_accepted_friends([user_id])
        return res.status(200).send(friends)
    },

    getPendingFriends: async (req,res) => {
        const { user_id } = req.params
        const db = req.app.get('db')
        const friends = await db.friends.get_pending_friends([user_id])
        return res.status(200).send(friends)
    },

    addFriend: async (req,res) => {
        const { user_id,friend_id } = req.body
        const db = req.app.get('db')
        const friend = await db.friends.addFriend([user_id,friend_id,false])
        return res.status(200).send(friend)
    }
}