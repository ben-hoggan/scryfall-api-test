import express from 'express'
import { join } from 'node:path'

import routes from './routes'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/', routes)

export default server
