const db = require('./lein.js')

async function start(){
    await db.updateDataSession('[]')
}

start()