
module.exports = {
    addNewBrowse: async (req,res) => {
        const db = req.app.get('db')
        const { unique_id } = req.body
        const newBrowser = await db.tracking.add_new_browser([unique_id])
        return res.status(200).send(newBrowser[0].unique_id)
    },
    
    addNewMount: async (req,res) => {
        const db = req.app.get('db')
        const { unique_id,last_visit } = req.body
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

    loginClicks: async (req,res) => {
        const { unique_id} = req.body
        const db = req.app.get('db')

        // --- verify unique_id is in databas --- //
        const result = await db.tracking.get_info_by_unique_id([unique_id])
        const existingId = result[0]
        if(!existingId) {
            return res.status(404).send('this unque_id does not exist')
        }
        
        const increment = await db.tracking.add_login_click([unique_id])
        return res.status(200).send(increment)
    },

    projectsClicks: async (req,res) => {
        const { unique_id } = req.body
        const db = req.app.get('db')

        // --- verify unique_id is in databas --- //
        const result = await db.tracking.get_info_by_unique_id([unique_id])
        const existingId = result[0]
        if(!existingId) {
            return res.status(404).send('this unque_id does not exist')
        }
        
        const increment = await db.tracking.add_projects_click([unique_id])
        return res.status(200).send(increment)
    },

    aboutClicks: async (req,res) => {
        const { unique_id,tag } = req.body
        const db = req.app.get('db')

        // --- verify unique_id is in databas --- //
        const result = await db.tracking.get_info_by_unique_id([unique_id])
        const existingId = result[0]
        if(!existingId) {
            return res.status(404).send('this unque_id does not exist')
        }
        
        const increment = await db.tracking.add_about_click([unique_id])
        return res.status(200).send(increment)
    },

    setIsAdmin: async (req,res) => {
        const db = req.app.get('db')
        const { unique_id,isAdmin } = req.body
        // console.log('hit is admin',unique_id)
        const admin = await db.tracking.set_is_admin([isAdmin,unique_id])
        return res.status(200).send(admin)
    }
}