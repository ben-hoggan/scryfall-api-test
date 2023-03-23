import express from 'express'
import request from 'superagent'

import * as db from './db/db'
import { delay, unwrapCard } from './lib'
import { Card } from '../common/Card'

const router = express.Router()

router.get('/sets', async (req, res) => {
  try {
    const sets = await db.getSets()
    res.json({ sets })
  } catch(error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/sets/fetch', async (req, res) => {
  try {
    const response = await request.get('https://api.scryfall.com/sets')

    for (let index = 0; index < response.body.data.length; index++) {
      await db.insertSet(response.body.data[index])
    }

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/sets/clear', async (req, res) => {
  try {
    const cleared = await db.clearSets()
    res.json({ cleared })
  } catch(error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/cards', async (req, res) => {
  try {
    const cards = await db.getCards()
    res.json({ cards })
  } catch(error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/cards/fetch', async (req, res) => {
  try {
    // Sending success response back to client straight away or the request will time out
    res.status(200).json({ message: 'Fetching cards for our database, this could take awhile' })

    const sets = await db.getSets()

    for (let index = 0; index < sets.length; index++) {
      console.log('index ', index, ' out of sets.length ', sets.length)
      let hasMore = true
      let nextPage = sets[index].search_uri

      // Getting cards from a set is paginated
      while (hasMore) {
        try {
          const response = await request.get(nextPage)
  
          for (let index = 0; index < response.body.data.length; index++) {
            const fullCard = response.body.data[index]
            const trimmedCard: Card = unwrapCard(fullCard)
  
            await db.insertCard(trimmedCard)
          }

          // The response.body.has_more is a boolean of if the set has more cards
          hasMore = response.body.has_more

          if (hasMore) {
            // If the set does have more cards, set the nextPage we'll need to request from
            nextPage = response.body.next_page
          }
          
        } catch (error) {
          // If there is an error then stop the while loop
          hasMore = false
          console.log(error)
        }
  
        // Wait 50ms between requests
        await delay(50);
      }
    }
  } catch (error) {
    console.log(error)
  }
})

router.get('/cards/clear', async (req, res) => {
  try {
    const cleared = await db.clearCards()
    res.json({ cleared })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
