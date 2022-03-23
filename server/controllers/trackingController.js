
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
        console.log(unique_id,last_visit,'here is unique id in controller')
        const result = await db.tracking.get_info_by_unique_id([unique_id])
        const existingId = result[0]
        if(!existingId) {
            return res.status(404).send('this unque_id does not exist')
        }
        const newVisit = await db.tracking.add_new_visit([last_visit,unique_id])
        return res.status(200).send(newVisit)
    },

    getAllTraffic: async (req,res) => {
        const db = req.app.get('db')
        const traffic = await db.tracking.get_all_traffic()
        return res.status(200).send(traffic)
    },

    trackClicks: async (req,res) => {
// --- tag item is string that selects whickh clumn needs to be updated --- //
        const { unique_id,tag } = req.body
        const db = req.app.get('db')

        // --- verify unique_id is in databas --- //
        const result = await db.tracking.get_info_by_unique_id([unique_id])
        const existingId = result[0]
        if(!existingId) {
            return res.status(404).send('this unque_id does not exist')
        }
        
        // const newVisit = await db.tracking.add_new_visit([last_visit,unique_id])
        const increment = await db.tracking.add_login_click([unique_id])
        console.log('unique_id',increment)


        return res.status(200).send(increment)
    }
}