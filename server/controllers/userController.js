
module.exports = {
    getUsers: async (req,res) => {
        const users = await req.app.get('db').get_all_users();
        return res.status(200).send(users)
    }
}