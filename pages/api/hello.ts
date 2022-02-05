// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

const express = require('express')
const request = require('request')
const app = express()

app.use((req: any, res: { header: (arg0: string, arg1: string) => void }, next: () => void) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/medium', (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { type: string; message: any }): any; new(): any } }; set: (arg0: string, arg1: string) => void; send: (arg0: Buffer) => void }) => {
  request(
    { url: 'https://brandonblankenstein.medium.com/' },
    (error: any, response: { statusCode: number }, body: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({
          type: 'error', message:
            error.message
        })
      }

      res.set('Content-Type', 'application/rss+xml')
      res.send(Buffer.from(body))
    })
})

const PORT = 4000
app.listen(PORT, () => console.log(`listening on ${PORT}`))
