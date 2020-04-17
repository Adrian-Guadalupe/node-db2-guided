// up describes the changes that will be applied to the database
exports.up = function(knex) {
  // create the vegetables table
   return knex.schema.createTable('vegetables', tbl =>{ //REMEMBER TO 'RETURN'
      tbl.increments() // Shortcut for: a primary key, name: id, type: integer, autoincrement

      tbl
         .string('name', 255)
         .notNullable()
         .unique()
         .index()
      
      tbl.boolean('favorite')
   })
};


// down describes how to undo the changes from the up function
exports.down = function(knex) {
  // remove (drop) the vegetables table
  return knex.schema.dropTableIfExists('vegetables')
};
