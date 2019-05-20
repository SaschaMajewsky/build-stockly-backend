exports.up = function (knex, Promise) {
    return knex.schema.createTable('users',tbl=>{
        tbl.increments();

        tbl.string('username',36)
        .notNullable()
        .unique();

        tbl.string('email',254)
        .notNullable()
        .unique();

        tbl.string('password',254)
        .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};