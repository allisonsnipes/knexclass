exports.up = function(knex, Promise) {
    return knex.schema.createTable("todo", function(table) {
        table.increments("id")
        table.string("text").notNullable()
        table.boolean("completed").defaultTo(false)
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("product")
        .dropTable("user");
};

exports.config = {
    transaction: false
};

exports.down = function(knex, Promise) {
    //tear down
};