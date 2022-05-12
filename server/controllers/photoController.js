
module.exports = {
    getAlbums: async (req,res) => {
        const { user_id } = req.params
        const album = await req.app.get('db').user_photos.get_albums_by_user([user_id])
        return res.status(200).send(album)
    },

    getAlbumPhotos: async (req,res) => {
        const { album_id } = req.params
        const photos = await req.app.get('db').user_photos.get_album_photos([album_id])
        return res.status(200).send(photos)
    },

    uploadPhoto: async (req,res) => {
        const { album_id,image_url, } = req.body
        const photo = await req.app.get('db').user_photos.add_to_album([album_id,image_url])
        return res.status(200).send(photo)
    },

    deletePhoto: async (req,res) => {
        const { photo_id } = req.params
        const photo = req.app.get('db').user_photos.delete_photo([photo_id])
        return res.status(200).send(photo)
    }
}