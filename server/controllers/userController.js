
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
        const { image_url,user_id } = req.body
        // const { user_id } = req.params
        // console.log('this is from update user',photo_url,user_id)
        const user = await db.update_user([image_url,user_id]);
        return res.status(200).send(user)
    },

    updateBackgroundPhoto: async (req,res) => {
        const { image_url,user_id } = req.body
        // console.log('hit background controller',image_url)
        const photo = req.app.get('db').user.update_background_url([image_url,user_id])
        res.status(200).send(photo)
    },

    updateInfo: async (req,res) => {
        const { email,last_name,first_name,user_id } = req.body
        // console.log('hit update user backend ', first_name)
        const info = await req.app.get('db').user.update_info([first_name,last_name,email,user_id])
        return res.status(200).send(info)
    }
}