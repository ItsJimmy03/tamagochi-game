const express = require('express')
const treatController = require('./controllers/treats_controller');

let app = express()
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
app.use(express.json())

app.use("/api/treats", treatController)

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }

 