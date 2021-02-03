
module.exports = {
    getAllProjects: async (req,res) => {
        const projects = await req.app.get('db').get_all_projects();
        return res.status(200).send(projects)
    },

    getUserProject: async (req,res) => {
        const projects = await req.app.get('db').get_user_project([user_id]);
        return res.status(200).send(projects)
    }
}