exports.up = function (knex) {
  return knex.schema.createTable('sets', (table) => {
    table.increments('id_ours')
    table.string('object')
    table.string('id')
    table.string('code')
    table.string('mtgo_code')
    table.string('arena_code')
    table.string('tcgplayer_id')
    table.string('name')
    table.string('set_type')
    table.string('released_at')
    table.string('block_code')
    table.string('block')
    table.string('parent_set_code')
    table.int('card_count')
    table.string('printed_size')
    table.boolean('digital')
    table.boolean('foil_only')
    table.boolean('nonfoil_only')
    table.string('scryfall_uri')
    table.string('uri')
    table.string('icon_svg_uri')
    table.string('search_uri')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('sets')
}
