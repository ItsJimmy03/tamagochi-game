const express = require('express')
const treatController = require('./controllers/treats_controller');
const thirstController = require('./controllers/thirst_controller');
// const hungerController = require('./controllers/hunger_controller');

let app = express()
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
app.use(express.json())

app.use("/api/treats", treatController)
app.use("/api/thirst", thirstController)
// app.use("/api/hunger", hungerController)

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }

 