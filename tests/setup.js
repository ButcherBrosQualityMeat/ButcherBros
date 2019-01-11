/* DO NOT EDIT */

const db = require('../server/db')
before(() => db.sync({force: true}))
afterEach(() => db.sync({force: true}))
after(() => db.close())
