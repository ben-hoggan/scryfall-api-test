import { Card } from "../common/Card";

export const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export const unwrapCard = (card: Card) => ({
  object: card.object, 
  id: card.id,
  lang: card.lang,
  mtgo_id: card.mtgo_id,
  mtgo_foil_id: card.mtgo_foil_id,
  tcgplayer_id: card.tcgplayer_id,
  tcgplayer_etched_id: card.tcgplayer_etched_id,
  cardmarket_id: card.cardmarket_id,
  oracle_id: card.oracle_id,
  prints_search_uri: card.prints_search_uri,
  rulings_uri: card.rulings_uri,
  scryfall_uri: card.scryfall_uri,
  uri: card.uri,
  name: card.name
});
