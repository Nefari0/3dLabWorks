module.exports = {
    getAll: async (req,res) => {
        const docs = await req.app.get('db').docs.get_docs()
        return res.status(200).send(docs)
        
    }
}