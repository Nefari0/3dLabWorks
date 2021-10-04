
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
        const { user_id, params_id } = req.body
        const currentId = user_id
        const model_id = params_id
        // console.log('user and model ids',id,params)
        // console.log('this is req.body',req.body,'this is from req.body')
        console.log('this is from req.body',currentId,model_id)

        const db = req.app.get('db')


        // get likes from current model
        const result = await db.get_likes([model_id])
        // console.log('this is result',result)
        

        // const existingLike = result[0]; //probably not going to use

        // find like for current model from current user/check for existing like
        // const index = result.findIndex((element) => element.user_id === +currentId) //pending delete
        const index = result.find(element => element.user_id === +currentId)
        
        console.log('this is index',index)    // pending delete
        // const { like_id } = index
        // console.log('this is like_id',like_id)    // pending delete
        // console.log('this is existingLike',existingLike)  // pending delete

        // check if current user has already liked current model

        // if liked?:
        //  get model_likes id number
        

        //  delete model_like from db and state

        // else:
        //  add_model_like
        // if (index) {
            if (index != undefined) {
            const { like_id } = index
            await db.remove_model_like([1,model_id])
            await db.remove_user_like([like_id])
            // await db.
            return res.status(409).send('Already liked by user')
        } else {

            // const getCount = await db.get_likes_count([model_id]);
            // const number = getCount[0].count
            // const total = parseInt(number) + 1
            // console.log('type if',typeof(getCount))
            // console.log('these are all your likes',getCount)

            // await db.add_model_like([total,model_id])
            await db.add_model_like([1,model_id])
            await db.add_user_like([user_id,model_id])
            // return res.status(200).send(`${model_id} is likes by ${user_id}`)
            return res.status(200).send(`${model_id} is likes by ${user_id}`)
        }

    },  

    getLikeCount: async (req,res) => {
        const likes = await req.app.get('db').get_likes_count(); 
        return res.status(200).send(likes)
    },

    getFeatured: async (req,res) => {
        const featured = await req.app.get('db').join_featured();
        return res.status(200).send(featured)
    },

    getComments: async (req,res) => {
        const comments = await req.app.get('db').get_comments();
        if (comments === null){
            return res.status(401).send('no comments')
        }  else {return res.status(200).send(comments)}
       
    },

    getModelComments: async (req,res) => {
        const { model_id } = req.params
        const comments = await req.app.get('db').get_project_comments([model_id]);
        return res.status(200).send(comments)
    },

    createComment: async (req,res) => {
        const { content } = req.body
        const comment = await req.app.get('db').create_comment([content])
    }
}