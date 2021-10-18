module.exports = {
    getAll: async (req,res) => {
        const docs = await req.app.get('db').docs.get_docs()
        return res.status(200).send(docs)   
    },

    getAbout: async (req,res) => {
        const about = await req.app.get('db').docs.get_doc_about()
        return res.status(200).send(about)
    },

    getGeneral: async (req,res) => {
        const general = await req.app.get('db').docs.get_doc_general()
        return res.status(200).send(general)
    }
}