
module.exports = {
    addNewBrowse: async (req,res) => {
        const db = req.app.get('db')
        const { unique_id } = req.body
        console.log(unique_id)
        const newBrowser = await db.tracking.add_new_browser([unique_id])
        return res.status(200).send(newBrowser[0].unique_id)
    },
    
    addNewMount: async (req,res) => {
        const db = req.app.get('db')
        const { unique_id,last_visit } = req.body
        // console.log(visited,'here is unique id in controller')
        const newVisit = await db.tracking.add_new_visit([last_visit,unique_id])
        return res.status(200).send(newVisit)
    },

    getAllTraffic: async (req,res) => {
        const db = req.app.get('db')
        const traffic = await db.tracking.get_all_traffic()
        return res.status(200).send(traffic)
    }
}