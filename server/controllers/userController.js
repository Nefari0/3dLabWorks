
module.exports = {
    getUsers: async (req,res) => {
        const users = await req.app.get('db').get_all_users();
        return res.status(200).send(users)
    },

    getUser: async (req,res) => {
        const { user_id } = req.params
        const user = await req.app.get('db').get_user_by_id([user_id]);
        return res.status(200).send(user)
    },

    updateUserPhoto: async (req,res) => {
        const db = req.app.get('db')
        // console.log('this is req.params',req.params)
        // console.log('this is req.body',req.body)
        const { photo_url } = req.body
        const { user_id } = req.params
        console.log('this is from update user',photo_url,user_id)
        const user = await db.update_user([photo_url,user_id]);
        return res.status(200).send(user)
    }

}