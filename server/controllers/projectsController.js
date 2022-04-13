
module.exports = {
    getAllProjects: async (req,res) => {
        const projects = await req.app.get('db').get_all_projects();
        return res.status(200).send(projects)
    },

    getUserProject: async (req,res) => {
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
        const { id, name, description, firebase_url, firebase_url01, firebase_url02 } = req.body
        const db = req.app.get('db')
        const newProject = await db.add_new_project([id,name,description,firebase_url,firebase_url01, firebase_url02, 0])
        return res.status(200).send(newProject)
    },

    updateFile: async (req,res) => {
        const { url, model_id } = req.body
        const firebase_url = url
        const db = req.app.get('db')
        const newFile = await db.projects.update_project_file([firebase_url,model_id])
        return res.status(200).send(newFile)
    },

    deleteProject: async (req,res) => {
        const { model_id } = req.params
        const db = req.app.get('db')
        await db.projects.delete_all_model_comments([model_id])
        await db.projects.delete_all_model_likes([model_id])
        await db.projects.delete_model_images([model_id])
        await db.delete_project([model_id])
        return res.status(200).send('deleted')
    },

    getLikeById: async (req,res) => {
        const { id,model_id } = req.body
        const user_id = id
        const db = req.app.get('db')
        const foundLike = await db.projects.get_like_by_id([user_id,model_id])
        if (foundLike[0] != undefined) {
            foundLike[0].is_liked = true
            console.log(foundLike[0].user_id,'found like')
        }
        return res.status(200).send(foundLike[0])
    },

    addLike: async (req,res) => {
        const { user_id, model_id } = req.body
        const db = req.app.get('db')

        // check if user already likes model_id

        const foundLike = await db.projects.get_like_by_id([user_id,model_id])

        // if not like: add to db
        if (foundLike[0] === undefined) {
            await db.projects.add_model_like([1,model_id])
            await db.add_user_like([user_id,model_id])
            return res.status(200).send('like added')
        // else: remove from db
        } else if (foundLike[0] != undefined) {
            await db.remove_model_like([1,model_id])
            await db.projects.remove_user_like_by_id([user_id,model_id])
            return res.status(200).send('deleted')
        }


        // add to user and model_id db
        return res.status(200).send(liked)

    },
    // realtime update of like number in Project.js
    updateProjectLikes: async (req,res) => {
        const { model_id } = req.params
        const getLikes = await req.app.get('db').projects.update_project_likes([model_id])
        const { likes } = getLikes[0]
        return res.status(200).send(getLikes)
    },

    getLikeCount: async (req,res) => {
        const { model_id } = req.params
        const likes = await req.app.get('db').get_likes_count([model_id]); 
        return res.status(200).send(likes)
    },

    getFeatured: async (req,res) => {
        const featured = await req.app.get('db').join_featured();
        return res.status(200).send(featured)
    },

    getComments: async (req,res) => {
        const comments = await req.app.get('db').comments.get_comments();
        if (comments === null){
            return res.status(401).send('no comments')
        }  else {return res.status(200).send(comments)}
       
    },

    getModelComments: async (req,res) => {
        const { model_id } = req.params
        const comments = await req.app.get('db').comments.get_project_comments([model_id]);
        return res.status(200).send(comments)
    },

    createComment: async (req,res) => {
        const { id,model_id,user,text } = req.body
        const user_name = user
        const user_id = id
        const comment = await req.app.get('db').projects.create_comment([user_id,model_id,user_name,text])
        return res.status(200).send(comment)
    },

    editProjectName: async (req,res) => {
        const { model_id, name, description } = req.body
        const model = await req.app.get('db').projects.change_name([name,description,model_id])
        return res.status(200).send(model)
    },

    getUserAndProjects: async (req,res) => {
        const { user_id } = req.params
        const info = await req.app.get('db').projects.get_user_and_projects([user_id])
        return res.status(200).send(info)
    }
}