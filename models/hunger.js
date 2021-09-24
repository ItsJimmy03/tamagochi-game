const db = require("../db/db")

const Hunger = {
    grab_hunger(pet_id) {
        const sql = `SELECT * hunger FROM statusBar WHERE petId = $1`;
        return db.query(sql, [pet_id]).then((dbResponse) => {
          return dbResponse.rows
        })
      }
}

module.exports = Hunger;

 