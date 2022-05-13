
module.exports = {
    getAlbums: async (req,res) => {
        const { user_id } = req.params
        const album = await req.app.get('db').user_photos.get_albums_by_user([user_id])
        // console.log('hit controller',album)
        return res.status(200).send(album)
    },

    getAlbumPhotos: async (req,res) => {
        const { album_id } = req.params
        const photos = await req.app.get('db').user_photos.get_album_photos([album_id])
        return res.status(200).send(photos)
    },

    uploadPhoto: async (req,res) => {
        const { album_id,id,image_url, } = req.body
        const user_id = id
        const photo = await req.app.get('db').user_photos.add_to_album([album_id,user_id,image_url])
        return res.status(200).send(photo)
    },

    // deletePhoto: async (req,res) => {
    //     const { photo_id } = req.params
    //     const photo = req.app.get('db').user_photos.delete_photo([photo_id])
    //     return res.status(200).send(photo)
    // },

    getAllPhotos: async (req,res) => {
        const { user_id } = req.params
        console.log('hit controller',user_id)
        const photos = await req.app.get('db').user_photos.get_all_photos([user_id])
        return res.status(200).send(photos)
    },

    deletePhotoByUrl: async (req,res) => {
        const { image_url } = req.body
        // console.log('hit url ', image_url)
        const photo = await req.app.get('db').user_photos.delete_by_url([image_url])
        return res.status(200).send(photo)
    }
}