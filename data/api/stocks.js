const db = require('../dbConfig');

module.exports = {
    insert,
    getAll,
    getByTicker,
    update,
}

function insert(payload) {
    return db('stocks')
        .insert(payload, 'id')
        .then(id => {
            return db('stocks')
            .where({
                id: id[0]
            })
            .first();
        });
}

function getAll() {
    return db('stocks');
}

function getByTicker(ticker) {
    return db('stocks')
        .where({
            ticker
        })
        .first();
}

function update(ticker,payload) {
    return db('users')
        .where({
            ticker
        })
        .update(payload)
        .first();
}