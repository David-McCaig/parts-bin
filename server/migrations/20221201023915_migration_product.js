/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('product', (table) => {
      table.uuid('id').primary();
      table
        .uuid('customer_id')
        .references('customer.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('item_name').notNullable();
      table.string('description').notNullable();
      table.string('category').notNullable();
      table.string("image_path").notNullable();
      table.string('price').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('product');
  };
