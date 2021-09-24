const db = require("../db/db")

const Treat = {
    grabTreats() {
        const sql = `
          SELECT * FROM treats;
        `;
    
        return db.query(sql).then((dbResponse) => {
          return dbResponse.rows
        })
      }
}

module.exports = Treat;