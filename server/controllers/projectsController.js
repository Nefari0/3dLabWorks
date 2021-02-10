
module.exports = {
    getAllProjects: async (req,res) => {
        const projects = await req.app.get('db').get_all_projects();
        return res.status(200).send(projects)
    },

    getUserProject: async (req,res) => {
        const projects = await req.app.get('db').get_user_project([user_id]);
        return res.status(200).send(projects)
    },

    getOwnerName: async (req,res) => {
        const name = await req.app.get('db').get_model_owner_name([user_id]);
        return res.status(200).send(name)
    },

    addProject: async (req,res) => {
        const { id, name, description, firebase_url, firebase_url01 } = req.body
        const db = req.app.get('db')
        const newProject = await db.add_new_project([id,name,description,firebase_url,firebase_url01])
        return res.status(200).send(newProject)
    },

    deleteProject: async (req,res) => {
        const { model_id } = req.params
        console.log('this is from controllor id',req.params)
        
        const db = req.app.get('db')
        await db.delete_project([model_id])
        // await db.delete_project([]) 
        return res.status(200).send('deleted')
    }
}