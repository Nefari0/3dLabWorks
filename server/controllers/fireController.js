module.exports = {
    fireTestHere: async (req,res) => {
        const text = 'this is fire test'
        const response = await text
        return res.status(200).send(response)
    } 
}