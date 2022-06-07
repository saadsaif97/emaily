import express from "express"
const app = express()

// express registers the routes

app.get("/", async (req, res) => {
    res.status(200).json({ hi: 'there' })
})

app.get("/:id", async (req, res) => {
    res.status(200).json("Get id: " + req.params.id)
})


// Server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is currently running on port ${PORT}...!`))
