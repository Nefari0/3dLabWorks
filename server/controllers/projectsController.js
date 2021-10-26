
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
        const { id, name, description, firebase_url, firebase_url01, firebase_url02 } = req.body
        const db = req.app.get('db')
        const newProject = await db.add_new_project([id,name,description,firebase_url,firebase_url01, firebase_url02, 0])
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
        // const currentId = user_id
        // const model_id = params_id
        const db = req.app.get('db')

        // check if user already likes model_id

        const foundLike = await db.projects.get_like_by_id([user_id,model_id])
        // const isLiked = foundLike[0].user_id
        // console.log('found like',isLiked)

        if (foundLike[0] === undefined) {

            await db.projects.add_model_like([1,model_id])
            await db.add_user_like([user_id,model_id])

            return res.status(200).send('like added')
        }
        // const liked = foundLike[0].like_id
        // const { like } = foundLike[0]
        await db.remove_model_like([1,model_id])
        await db.projects.remove_user_like_by_id([user_id,model_id])
        console.log('hit end here')
        // return res.sendStatus(200).send('deleted')
        return res.status(200).send('deleted')
        
        // if (liked != null) {
        //     // remove from model_like db by like_id (...liked) 
        //     console.log('liked', liked)
        //     await db.remove_model_like([1,liked])
        //     await db.remove_user_like([liked])
        //     // model.like -= 1 by id
        //     // await db.projects.get_like_by_id([user_id,model_id])
        //     // await db.projects.add_model_like([1,model_id])
            
        //     // return res.sendStatus(404).send('not liked  ')
        // }

        // const newModelLike = await db.projects.add_model_like([1,model_id])
        // await db.projects.add_model_like([1,model_id])

        // return await db.add_user_like([user_id,model_id])


        // add to user and model_id db
        return res.status(200).send(liked)
        
        
        return res.status(404).send('returned')
        // return (console.log('is likes'))
        // return res.status(200).send(user)
        // return res.status(200).send(liked)
        // if liked: 
                // remove like from modile
                // remove user/model_id from model_likes db
            // else add like to model_il
                // add user/model_id to db

        // get likes from current model
        // const result = await db.get_likes([model_id])


            // await db.add_model_like([total,model_id])
            // await db.projects.add_model_like([1,model_id])
            // await db.projects.add_user_like([user_id,model_id])
            // return res.status(200).send(`${model_id} is likes by ${user_id}`)
            // return res.status(200).send(`${model_id} is likes by ${user_id}`)
        // }

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
        const { user_id,model_id,user,text } = req.body
        const comment = await req.app.get('db').projects.create_comment([user_id,model_id,user,text])
        return res.status(200).send(comment)
    }
}