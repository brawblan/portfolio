const express = require('express')
const request = require('request')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/medium', (req, res) => {
  request(
    { url: 'https://brandonblankenstein.medium.com/feed/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({
          type: 'error', message:
            err.message
        })
      }

      res.set('Content-Type', 'application/rss+xml')
      res.send(Buffer.from(body))
    })
})

const PORT = 4000
console.log(PORT)
app.listen(PORT, () => console.log(`listening on ${PORT}`))

// Websites I used to get this running
// https://www.npmjs.com/package/rss-parser
// https://javascript.plainenglish.io/a-medium-slice-430c413adfb9
// https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel
// https://www.twilio.com/blog/node-js-proxy-server