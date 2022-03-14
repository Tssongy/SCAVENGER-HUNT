const db = require('../db/db')

const Treasure = {
    findAll: () => {
            const sql = 'SELECT * FROM treasures'
            // the next line returns an array of records
            return db
                .query(sql)
                .then(dbRes => dbRes.rows)
            },
    create: (name, clue, address) => {
            const sql = `
                INSERT INTO treasures(name, clue, address) VALUES ($1, $2, $3)
                RETURNING *
            `

            return db
                .query(sql, [name, clue, address])
                .then(dbRes => dbRes.rows[0])
            },
    delete: (treasureId) => {
        const sql = `
            DELETE FROM treasures WHERE id = $1
        `

        return db.query(sql, [treasureId])
    }

    
}


module.exports = Treasure
