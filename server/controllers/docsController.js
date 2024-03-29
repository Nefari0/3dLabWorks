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
    },

    // ---- edit docs control ---- //

    editGeneral: async (req,res) => {
        const { content,tag } = req.body
        const newContent = await req.app.get('db').docs.edit_doc_general([content,tag])
        return res.status(200).send(newContent)
    },

    hideDoc: async (req,res) => {
        const { content, tag } = req.body
        console.log('here are your tags/contents',tag)
        const newContent = await req.app.get('db').docs.hide_doc([content,tag])
        return res.status(200).send(newContent)
    },

    getAllLinks: async (req,res) => {
        const links = await req.app.get('db').docs.get_links()
        return res.status(200).send(links)
    },

    // -- ADMIN memos -- //
    getAllMemos: async (req,res) => {
        const memos = await req.app.get('db').memo.get_all_memos()
        return res.status(200).send(memos)
    },

    updateMemo: async (req,res) => {
        const { text,memo_id } = req.body
        // console.log('hitting backend?',text)
        const update = await req.app.get('db').memo.update_memo([text,memo_id])
        return res.status(200).send(update)
    }
}