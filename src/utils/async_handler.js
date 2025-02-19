
const asyncHandler = (fn) => //when u call a function ,, it calls async(...) and then it goes to the await
   async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

export default asyncHandler;