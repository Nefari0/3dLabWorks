
module.exports = {
    getAllProjects: async (req,res) => {
        const projects = await req.app.get('db').get_all_projects();
        return res.status(200).send(projects)
    },

    getUserProject: async (req,res) => {
        // const { user_id } = req.body
        const { user_id } = req.params
        const projects = await req.app.get('db').get_user_projects([user_id]);
        return res.status(200).send(projects)
    },

    getProjectById: async (req,res) => {
        const { model_id } = req.params
        const project = await req.app.get('db').get_project_by_id([model_id])
        return res.status(200).send(project)
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
        const { id, params } = req.body
        // console.log('this is req.body',req.body,'this is from req.body')
        console.log('this is from req.body',id,params,'this is from req.body')
        const db = req.app.get('db')
        const result = await db.get_likes([params])
        const existingLike = result[0];
        console.log('this is existingLike',existingLike)
        // const like = 1

        if (existingLike) {
            return res.status(409).send('Already liked by user')
        }

        const getCount = await db.get_likes_count([params]);
        const number = getCount[0].count
        const total = parseInt(number) + 1
        console.log(typeof(total))
        console.log('these are all your likes',total)
        await db.add_model_like([total,params])
        await db.add_user_like([user_id,params])
        // return res.status(200).send(`${model_id} is likes by ${user_id}`)
        return res.status(200).send(`${params} is likes by ${id}`)

    },  

    getLikeCount: async (req,res) => {
        const likes = await req.app.get('db').get_likes_count(); 
        return res.status(200).send(likes)
    },

    getFeatured: async (req,res) => {
        const featured = await req.app.get('db').join_featured();
        return res.status(200).send(featured)
    }
}