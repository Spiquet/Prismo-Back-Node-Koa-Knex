exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', table => {
    table.increments();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('avatar').notNullable();
    table.string('function');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('member');
};
