const server = require("./api/server") //imports server.js

const port = process.env.port || 4000

if (!module.parent) {
    server.listen(port, () => {
        console.log(`Server running at http://localhost: ${port}`)
    })
}