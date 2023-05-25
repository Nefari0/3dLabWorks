
module.exports = {
    getImages: async (req,res) => {
        const { model_id } = req.params
        const images = await req.app.get('db').projects.get_model_images_by_id([model_id]);
        return res.status(200).send(images)
    },

    putImage: async (req,res) => {
        const { model_id,name,photo_url } = req.body
        const image = await req.app.get('db').projects.add_model_image_by_id([model_id,name,photo_url])
        return res.status(200).send(image)
    },

    deletePhoto: async (req,res) => {
        const { url,main_image_url,model_id } = req.body
        // -- Check if is the main project image. If it is, change to null
        const gone = null
        if (main_image_url === url) {
            await req.app.get('db').projects.update_project_main_photo(gone,model_id)
        }

        // -- Remove from database
        const deletePhoto = await req.app.get('db').projects.delete_project_photo([url])
        return res.status(200).send(deletePhoto)
    },

    changeMainPhoto: async (req,res) => {
        const { model_id,url } = req.body
        const newPhoto = await req.app.get('db').projects.update_project_main_photo(url,model_id)
        return res.status(200).send(newPhoto)
    },

    // ---- This function is build to move images that are attached to models over to a seperate DB if they arent already there --- //
    // sendImToDB: async (req,res) => {
    //     const { model_id,url } = req.body
    //     const name = 'default'
    //     const image = await req.app.get('db').projects.add_model_image_by_id([model_id,name,url])
    //     return res.status(200).send(image)
    // }
}