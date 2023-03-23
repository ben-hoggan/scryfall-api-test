exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id_ours')
    table.string('object')
    table.string('id')
    table.string('lang')
    table.string('mtgo_id')
    table.string('mtgo_foil_id')
    table.string('tcgplayer_id')
    table.string('tcgplayer_etched_id')
    table.string('cardmarket_id')
    table.string('oracle_id')
    table.string('prints_search_uri')
    table.string('rulings_uri')
    table.string('scryfall_uri')
    table.string('uri')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cards')
}
