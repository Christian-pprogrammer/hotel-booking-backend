exports.createUser = async (req,res) => {
    try {
        
    }catch(err) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }
}