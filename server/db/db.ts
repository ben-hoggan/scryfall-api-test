import connection from './connection'

import { Set } from '../../common/Set'
import { Card } from '../../common/Card'

export async function getSets(db = connection): Promise<Set[]> {
  return db('sets').select()
}

export async function insertSet(set: Set, db = connection) {
  return db('sets').insert(set)
}

export async function clearSets(db = connection) {
  return db('sets').del()
}

export async function getCards(db = connection): Promise<Card[]> {
  return db('cards').select()
}

export async function insertCard(card: Card, db = connection) {
  return db('cards').insert(card)
}

export async function clearCards(db = connection) {
  return db('cards').del()
}
