const db = require("../db/db")

const Thirst = {
    grab_Thirst(pet_id) {
        const sql = `SELECT * thirst FROM statusBar WHERE petId = $1`;
        return db.query(sql, [pet_id]).then((dbResponse) => {
          return dbResponse.rows[0]
        })
      }
}

module.exports = Thirst;

 