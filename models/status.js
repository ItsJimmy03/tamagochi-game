const db = require("../db/db")

const StatusBar = {
    grabHunger() {
        const sql = `
          SELECT hunger FROM statusBar;
        `;
    
        return db
          .query(sql,)
          .then((dbResponse) => {
            return dbResponse.rows[0];
          })
          .catch(function (error) {
            console.log("Error:" + String(error));
          });
      }
}

module.exports = StatusBar;