
module.exports = {
    getAllProjects: async (req,res) => {
        const projects = await req.app.get('db').get_all_projects();
        return res.status(200).send(projects)
    },

    getUserProject: async (req,res) => {
        const { user_id } = req.body
        const projects = await req.app.get('db').get_user_projects([user_id]);
        return res.status(200).send(projects)
    },

    joinProject: async (req,res) => {
        const orders = await req.app.get('db').join_user_project();
        return res.status(200).send(orders)
    },

    addProject: async (req,res) => {
        const { id, name, description, firebase_url, firebase_url01 } = req.body
        const db = req.app.get('db')
        const newProject = await db.add_new_project([id,name,description,firebase_url,firebase_url01])
        return res.status(200).send(newProject)
    },

    deleteProject: async (req,res) => {
        const { model_id } = req.params
        const db = req.app.get('db')
        await db.delete_project([model_id])
        // await db.delete_project([]) 
        return res.status(200).send('deleted')
    },

    addLike: async (req,res) => {
        const { user_id, model_id } = req.body
        const db = req.app.get('db')
        const result = await db.get_likes([model_id])
        const existingLike = result[0];
        // const like = 1

        if (existingLike) {
            return res.status(409).send('Already liked by user')
        }

        const getCount = await db.get_likes_count([model_id]);
        const number = getCount[0].count
        const total = parseInt(number) + 1
        console.log('these are all your likes',total)
        await db.add_model_like([total,model_id])
        await db.add_user_like([user_id,model_id])
        // return res.status(200).send(`${model_id} is likes by ${user_id}`)
        return res.status(200).send(`${model_id} is likes by ${user_id}`)

    },  

    getLikeCount: async (req,res) => {
        const likes = await req.app.get('db').get_likes_count(); 
        return res.status(200).send(likes)
    }
}