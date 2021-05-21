
module.exports = {
    addUrl: async (req,res) => {
        const { user_id, firebase_url, info } = req.body
        const item = await req.app.get('db').add_deleted_fb_url([user_id,firebase_url,info])
        return res.status(200).send(item)
    }
}