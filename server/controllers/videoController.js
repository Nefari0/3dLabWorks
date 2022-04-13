
module.exports = {
    getVids: async (req,res) => {
        const db = req.app.get('db')
        // console.log('hit video controller')
        const videos = await db.videos.get_videos()
        return res.status(200).send(videos)
    },

    getFeaturedVids: async (req,res) => {
        const db = req.app.get('db')
        const videos = await db.videos.featured_videos()
        res.status(200).send(videos)
    }
}