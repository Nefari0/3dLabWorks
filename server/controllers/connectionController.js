module.exports = {
    getUserFriends: async (req,res) => {
        const { user_id } = req.params
        // const user_id = id
        // console.log('hit friends',re/q.params)
        const db = req.app.get('db')
        const friends = await db.friends.get_user_friends([user_id])
        return res.status(200).send(friends)
    },
    //  --- get information associated with connection --- //
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
        if(friends.length < 1){
            console.log('not a friend')
            return res.status(404).send('no pending request')
        }
        console.log('from pending',friends)
        return res.status(200).send(friends)
    },

    addFriend: async (req,res) => {
        const { id,friend_id } = req.body
        const db = req.app.get('db')
        // --- has sender already sent a request to this recipient --- //
        const existingReciever = await db.friends.existing_friend([id,friend_id])
        if(existingReciever[0] != undefined) {
            return res.status(409).send('already exists')
        }
        // --- has the recipient send a request to sender --- //
        const existingSender = await db.friends.existing_friend([friend_id,id])
        if(existingSender[0] != undefined) {
            return res.status(409).send('already exists')
        }
        
        // --- send request --- //
        const friend = await db.friends.add_friend([id,friend_id,false])
        console.log('hit bottom',friend[0])
        // return res.status(200).send(friend)
    },
    
    // --- user confirms another user's request --- //
    confirmRequest: async (req,res) => {
        const { from,to,yes } = req.body
        const db = req.app.get('db')
        const accepted = await db.friends.confirm_request([from,to])
        const newFriend = await db.friends.add_friend([to,from,yes])
        return res.status(200).send(newFriend)
    },

    removeConnection: async (req,res) => {
        const { from,to } = req.body
        // console.log('hit remove in backend',req.body)
        const db = req.app.get('db')
        const xMyFriend = await db.friends.remove_connection([from,to])
        const xYourFriend = await db.friends.remove_connection([to,from])
        return res.status(200).send(xMyFriend)
    }
}