const express = require('express')
const app = express()
const PORT = process.env.PORT||3500

app.use(express.static("views"))

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})