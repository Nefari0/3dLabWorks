
module.exports = {
    getImages: async (req,res) => {
        const { model_id } = req.params
        console.log(model_id)
        const images = await req.app.get('db').projects.get_model_images_by_id([model_id]);
        return res.status(200).send(images)
    }
}